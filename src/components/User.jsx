import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({username: 'jessjelly', name: "Jess Jelly", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"});

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default function SignInToggle() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const toggleUser = () => {
    setLoggedIn((currUser) => {
      return currUser == {username: 'jessjelly', name: "Jess Jelly", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"} ? "signedIn" : "signedOut";
    });
  };

  return (
    <>
      <h2>{loggedIn}</h2>
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}
