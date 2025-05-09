import { NavLink } from "react-router-dom";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <h1 className="text-2xl font-bold">ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/sessions" className={({ isActive }) => (isActive ? "active" : "")}>
              Browse Sessions
            </NavLink>
          </li>
          <li>
            <Button>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
