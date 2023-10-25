import React, { useEffect, useState } from 'react';
import { fetchComments } from '../api/api.js'

export default function CommentList({ article }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id} className="comment__card__container">
            <header className="comment__card__header">
              <ul className="list-group">
                <li className="list-group-item comment__card__votes">
                  {comment.votes}
                </li>
                <li className='list-group-item comment__card__like'>
                <input
                    type="checkbox"
                    id={`tbg-btn-1`}
                    onChange={(e) => console.log(e)}
                  />
                  <label htmlFor={`tbg-btn-1`}>
                    <img src={`/heart-svgrepo-com.svg`} alt="like button, shape of heart" />
                  </label>
                </li>
                <li className="list-group-item comment__card__author">
                  {comment.author}
                </li>
              </ul>
            </header>
              <p className="comment__card__body">
                {comment.body}
              </p>
            <p className="comment__card__footer">
              {comment.created_at.slice(0, 10)}
            </p>
          </section>
        )
      })}
    </>
  );
  


}
