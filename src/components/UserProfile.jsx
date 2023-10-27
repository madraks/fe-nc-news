import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./User";
import SignInToggle from "./SignInToggle";

export default function UserProfile() {
  // const {signOut} = useContext(UserContext);
  const { loggedIn } = useContext(UserContext);

    return (
      <div className="container user__container">
        <p><img src={loggedIn.avatar_url}/></p>
        <p>{loggedIn.name}</p>
        <p>{loggedIn.username}</p>
        <SignInToggle />
      </div>
    )
}