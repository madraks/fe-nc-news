import { useContext } from "react";
import { UserContext } from "./User";
import { Link } from "react-router-dom";

export default function SignInToggle() {
  const { loggedIn, setLoggedIn, signOut } = useContext(UserContext);

  const toggleUser = () => {
    if (loggedIn.username !== '') {
      signOut();
    } 
  };

  if (loggedIn.username === '') {
    return ( <Link to="/login"><button style={{backgroundColor: 'lightsteelblue'}}>Sign up!</button></Link>)
  }

  return (
    <>
      <h2>{loggedIn.username}</h2>
      <Link to="/login"><button style={{backgroundColor: '#cc77aa'}} onClick={toggleUser}>Sign Out</button></Link>
    </>
  );
}
