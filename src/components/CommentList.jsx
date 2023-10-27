import React, { useEffect, useState } from 'react';
import { fetchComments } from '../api/api.js'
import InsertComment from './InsertComment.jsx';
import HeartLike from './HeartLike.jsx';
import DeleteButton from './DeleteButton.jsx';
import { useContext } from 'react';
import { UserContext } from './User.jsx';
import SignInToggle from './SignInToggle.jsx';

export default function CommentList({ article }) {
  const {loggedIn} = useContext(UserContext)
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  const handleCommentUpdate = (newComments) => {
    setComments(newComments);
  }

  const handleDeleteUpdate = (removed) => {
    setComments(removed)
  }

  const handleVoteUpdate = (value) => {
    setVotes(value);
  }

  useEffect(() => {
    fetchComments(article.article_id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <h3 className='comment__container__title'>Comments</h3>
      {loggedIn.username !== "" ? <InsertComment comments={comments} handleComment={handleCommentUpdate} handleVote={handleVoteUpdate}/> : <SignInToggle/>}
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id} className="comment__card__container">
            <header className="comment__card__header">
              <ul className="list-group">
                <li className='list-group-item comment__card__like'>
                  <HeartLike aria-label="heart shaped like button" comment_id={comment.comment_id} votes={comment.votes} handleVote={handleVoteUpdate}/>
                </li>
                <li className="list-group-item comment__card__author">
                  {comment.author}
                </li>
                <li className='list-group-item comment__card__delete'>
                {loggedIn.username === comment.author ? <DeleteButton comment_id={comment.comment_id} author={comment.author} handleDelete={handleDeleteUpdate}/> : ''}
                </li>
              </ul>
            </header>
            <p className="comment__card__body">
              {comment.body}
            </p>
            <p className="comment__card__footer">
              {comment.created_at ? comment.created_at.slice(0, 10) : "..a few seconds ago"}
            </p>
          </section>
        )
      })}
    </>
  );



}
