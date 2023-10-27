import { removeComment } from "../api/api";

export default function DeleteButton({ comment_id, author, handleComment }) {

  const updateComment = (e) => {
    // this is so disgusting don't judge me
    e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('hidden', 'true'); 
    removeComment(comment_id);
  }

  return <button style={{ backgroundColor: 'tomato' }} onClick={(e) => { updateComment(e) }}>Delete</button>

}