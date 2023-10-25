import { NavLink } from "react-router-dom";

export default function Nav() {
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
      </ul>
    </nav>
  )
}