import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignInToggle, { UserContext } from "./User";

export default function UserProfile() {
  const {signOut} = useContext(UserContext);
  const { loggedIn } = useContext(UserContext);

  const handleSignOut = () => {
    signOut();
  }

    return (
      <div className="container user__container">
        <p><img src={loggedIn.avatar_url}/></p>
        <p>{loggedIn.name}</p>
        <p>{loggedIn.username}</p>
        <Link to="/login"><button style={{backgroundColor:'#cc77aa'}} onClick={() => {handleSignOut}}>Sign Out</button></Link>
      </div>
    )
}