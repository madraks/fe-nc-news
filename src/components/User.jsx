import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const defaultUser = { username: "", name: "", avatar_url: ""};
  const [loggedIn, setLoggedIn] = useState(defaultUser);

  const signOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(defaultUser);
  }

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn , signOut}}>
      {children}
    </UserContext.Provider>
  );
};

// export default function SignInToggle() {
//   const { loggedIn, setLoggedIn } = useContext(UserContext);

//   const toggleUser = () => {
//     setLoggedIn((currUser) => {
//       return currUser == {username: 'jessjelly', name: "Jess Jelly", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"} ? "true" : "false";
//     });
//   };

//   return (
//     <>
//       <h2>{loggedIn.username}</h2>
//       <button onClick={toggleUser}>Toggle User</button>
//     </>
//   );
// }
