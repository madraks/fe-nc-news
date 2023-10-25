import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, Spinner, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
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

  if (isLoading) return <Spinner animation="grow" />


  // return (
  //   <>
  //     <h3>Comments</h3>
  //     {comments.map((comment) => {
  //       return (
  //         <Card key={comment.comment_id} className="comment__card__container">
  //           <Card.Header className="comment__card__header">
  //             <ListGroup>
  //               <ListGroupItem className="comment__card__votes">
  //                 {comment.votes}
  //                 <ToggleButtonGroup type="checkbox" onChange={((e)=> console.log(e))}>
  //                 <ToggleButton id="tbg-btn-1">
  //                   <img src={`../../public/heart-svgrepo-com.svg`} alt="like button text, shape of heart" />
  //                 </ToggleButton>
  //                 </ToggleButtonGroup>
  //               </ListGroupItem>
  //               <ListGroupItem className="comment__card__author">
  //                 {comment.author}
  //               </ListGroupItem>
  //             </ListGroup>
  //           </Card.Header>
  //           <Card.Body>
  //             <Card.Text className="comment__card__body">
  //               {comment.body}
  //             </Card.Text>
  //           </Card.Body>
  //           <Card.Footer className="comment__card__footer">
  //             {comment.created_at.slice(0, 10)}
  //           </Card.Footer>
  //         </Card>
  //       )
  //     })}
  //   </>
  // )

  return (
    <>
      <h3 className='comment__container__title'>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="comment__card__container">
            <div className="comment__card__header">
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
            </div>
            <div className="card-body">
              <p className="comment__card__body">
                {comment.body}
              </p>
            </div>
            <div className="comment__card__footer">
              {comment.created_at.slice(0, 10)}
            </div>
          </div>
        )
      })}
    </>
  );
  


}
