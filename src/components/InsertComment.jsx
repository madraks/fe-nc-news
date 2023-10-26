import { useContext, useEffect, useState } from "react";
import { UserContext } from "./User";
import { postComment } from "../api/api";
import { useParams } from "react-router-dom";

export default function InsertComment({ comments, handleComment }) {
  const [newComment, setNewComment] = useState('');
  const { loggedIn } = useContext(UserContext);
  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length === 0) {
      throw new Error();
    }
    
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
    <form className="form__container" onSubmit={handleSubmit}>
      <input className="form__input" placeholder="start typing here..." type="textfield" value={newComment} onChange={(e) => {
        setNewComment(e.target.value)
      }} />
      <button className="form__submit" style={{ backgroundColor: 'white' }} type="submit">Post</button>
    </form>

  )
}