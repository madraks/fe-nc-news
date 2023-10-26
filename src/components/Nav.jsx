import { NavLink, Link } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from './User'

export default function Nav() {
  const { loggedIn } = useContext(UserContext);

  return (
    <nav className="container">
      <ul className="nav__bar__container">
        <li className="nav__bar__links">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav__bar__links">
          <NavLink to="/articles" activeClassName="active">
            Articles
          </NavLink>
        </li>
        <li className="nav__bar__links">
          <NavLink to="/topics" activeclassname="active">
            Topics
          </NavLink>
        </li>
        {loggedIn.username !== "" ? (
      <li className="nav__bar__links">
        <NavLink to="/profile"><img className="nav__bar__hero" src={loggedIn.avatar_url}/></NavLink>
      </li>

        ) :
        (
          <li className="nav__bar__links">
            <Link to="/login">Sign in</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}