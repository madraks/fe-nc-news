import { useContext, useEffect, useState } from "react";
import { fetchUser, fetchUsers } from "../api/api";
import { UserContext } from "./User";

export default function Login() {
  const { setLoggedIn } = useContext(UserContext);
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();

    fetchUser(username)
      .then((data) => {
        setLoggedIn(data);
      })
  }

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
  }, [])

  if (isLoading) return ( <h2>Loading...</h2>)

  return (
    <>
    {users.map((user, index) => {
      return ( <button style={{backgroundColor: 'lightblue'}} className="login__selection" key={index} onClick={() => setUsername(user.username)}>{user.username}</button>)
    })}
      <form action="" className="login__container" onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <label htmlFor="username-input">Enter Username: </label>
        <input type="text" id="username-input" value={username} onChange={(e) => {
          setUsername(e.target.value)
          required
        }} />
        <button style={{backgroundColor: 'lightgreen'}} type="submit">Login</button>
      </form>
    </>
  )
}