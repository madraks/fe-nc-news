import { useContext, useState } from "react";
import { UserContext } from "./User";

export default function UserProfile() {

  const { loggedIn } = useContext(UserContext);

    return (
      <div className="container user__container">
        <p><img src={loggedIn.avatar_url}/></p>
        <p>{loggedIn.name}</p>
        <p>{loggedIn.username}</p>
      </div>
    )
}