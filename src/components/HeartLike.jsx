import { useState } from "react";
import { updateCommentVote } from "../api/api";

export default function HeartLike({ comment_id, votes, handleVote }) {
  const [votesDiff, setVotesDiff] = useState(0);
  const [renderedVote, setRenderedVote] = useState(votes);
  const [isClicked, setIsClicked] = useState(false);

  const updateVote = (value) => {
    setRenderedVote((current) => {
      return current + value;
    })

    handleVote(renderedVote + value)
    setVotesDiff(value);

    updateCommentVote(comment_id, value)
      .catch((err) => {
        setVotesDiff(0);
        setIsClicked(false);
        setRenderedVote(0);
        console.log(err);
      })
  }

  return (
    <>
      <li className="list-group-item comment__card__votes">
        {renderedVote}
      </li>
      <button onClick={() => {
        updateVote(isClicked ? -1 : 1);
        setIsClicked(!isClicked)
      }} className={`comment__like__button ${isClicked ? "active-comment-like" : ""}`
      }>
        <svg width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="nonzero" className={`${isClicked ? "active-comment-like" : ""}`} clipRule="evenodd" d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z" fill="#1C274C" />
        </svg>
      </button>
    </>
  )
}