import { useContext, useState } from "react";
import { UserContext } from "./User";
import { postComment } from "../api/api";
import { useParams } from "react-router-dom";
import HeartLike from "./HeartLike";

export default function InsertComment({ comments, handleComment, handleVote }) {
  const [newComment, setNewComment] = useState('');
  const { loggedIn } = useContext(UserContext);
  const { article_id } = useParams();
  const [ submittedComment, setSubmittedComment] = useState('');

  const renderComment = (renderedComment) => {
    return (
      <section className={`comment__card__container new-comment ${renderedComment ? "new-comment-active" : ""}`}>
      <header className="comment__card__header">
        <ul className="list-group">
          <li className='list-group-item comment__card__like'>
            <HeartLike disabled={true} votes={0} handleVote={handleVote}/>
          </li>
          <li className="list-group-item comment__card__author">
            {loggedIn.username}
          </li>
        </ul>
      </header>
      <p className="comment__card__body">
        {renderedComment}
      </p>
      <p className="comment__card__footer">
        "..a few seconds ago"
      </p>
    </section>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length === 0) {
      throw new Error();
    }

    setSubmittedComment((current) => {
      return newComment;
    })
    
    setNewComment('');
    
    postComment(article_id, loggedIn.username, newComment)
    .then((comment) => {
      handleComment([...comments, comment])
      
    })
    .catch((err) => {
      console.log(err)
    })
  }
    

  return (
    <>
    <form className="form__container" onSubmit={handleSubmit}>
      <input required={true} className="form__input" placeholder="start typing here..." type="textfield" value={newComment} onChange={(e) => {
        setNewComment(e.target.value)
      }} />
      <button className="form__submit" style={{ backgroundColor: 'white' }} type="submit">Post</button>
    </form>
    <>
      {submittedComment ? (
        renderComment(submittedComment)
      ) : (
        <p></p>
      )}
    </>
    </>
    )
}