import { useContext, useState } from "react";
import { updateVotesOnArticle } from "../api/api";
import { UserContext } from "./User";
export default function ArticleVotingButtons({ article_id, votes, handleVotes }) {

  const [votesDiff, setVotesDiff] = useState(0);
  const [renderedVotes, setRenderedVotes] = useState(votes);
  const [showAlert, setShowAlert] = useState(false);
  const { loggedIn} = useContext(UserContext)

  const updateVote = (value) => {
    if(loggedIn.username !== "") {
      setRenderedVotes((current) => {
        return current + value;
      })
      handleVotes(votes + value);
  
      setVotesDiff(value);
  
      updateVotesOnArticle(article_id, value)
        .catch((err) => {
          setVotesDiff(0);
        })
    } else {
      setShowAlert(true)
    }
  }


  return (
    <>
      <p className="single__article__votes">Votes: {renderedVotes}</p>

      <button aria-label="thumbs up icon, upvote article" style={{ backgroundColor: 'rgb(56, 211, 56)' }} disabled={votesDiff === 1} onClick={() => {
        updateVote(1)
      }
      } className={`article__voting__button ${votesDiff === 1 ? "active-btn" : ""}`}><svg viewBox="0 -0.5 15 15" id="meteor-icon-kit__regular-thumbs-up-s" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5.44337 3.10341L5.65113 2.27239C5.985 0.93689 7.1849 0 8.5616 0H9C9.2094 0 9.4181 0.02569 9.6213 0.07648C10.9937 0.4196 11.8282 1.81035 11.4851 3.18282L11.2808 4H12C13.6569 4 15 5.3431 15 7V9C15 11.7614 12.7614 14 10 14H1C0.44772 14 0 13.5523 0 13V4C0 3.44772 0.44772 3 1 3H5C5.15922 3 5.30975 3.03721 5.44337 3.10341zM6 6V12H10C11.6569 12 13 10.6569 13 9V7C13 6.4477 12.5523 6 12 6H10C9.3494 6 8.8721 5.3886 9.0299 4.75746L9.5448 2.69775C9.62 2.39687 9.4371 2.09199 9.1362 2.01677C9.0917 2.00563 9.0459 2 9 2H8.5616C8.1027 2 7.7027 2.3123 7.5914 2.75746L6.9701 5.2425C6.8589 5.6877 6.4589 6 6 6zM4 5H2V12H4V5z" fill="#000000"></path></g></svg>
      </button>

      <button aria-label="thumbs down icon, downvote article" style={{ backgroundColor: 'tomato' }} disabled={votesDiff === -1} onClick={() => {
        updateVote(-1)
      }
      } className={`article__voting__button ${votesDiff === -1 ? "active-btn" : ""}`}><svg viewBox="0 0 15.00 15.00" id="meteor-icon-kit__regular-thumbs-down-s" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" strokeWidth="0.00015000000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.32999999999999996"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5.4434 10.8966C5.3098 10.9628 5.1592 11 5 11H1C0.44772 11 0 10.5523 0 10V1C0 0.44772 0.44772 0 1 0H10C12.7614 0 15 2.23858 15 5V7C15 8.6569 13.6569 10 12 10H11.2808L11.4851 10.8172C11.8282 12.1896 10.9937 13.5804 9.6213 13.9235C9.4181 13.9743 9.2094 14 9 14H8.5616C7.1849 14 5.985 13.0631 5.6511 11.7276L5.4434 10.8966zM6 8C6.4589 8 6.8589 8.3123 6.9701 8.7575L7.5914 11.2425C7.7027 11.6877 8.1027 12 8.5616 12H9C9.0459 12 9.0917 11.9944 9.1362 11.9832C9.4371 11.908 9.62 11.6031 9.5448 11.3023L9.0299 9.2425C8.8721 8.6114 9.3494 8 10 8H12C12.5523 8 13 7.5523 13 7V5C13 3.34315 11.6569 2 10 2H6V8zM4 9V2H2V9H4z" fill="#000000"></path></g></svg>
      </button>
      {showAlert && (
        <div className = "custom-alert-article">
          <p>You must be signed in to vote</p>
          <button style={{backgroundColor: 'white', background: 'transparent'}} onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}
    </>
  )
}
