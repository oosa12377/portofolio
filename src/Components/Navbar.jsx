import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#projects"> projects</a>
        </li>
        <li>
          <a href="#connect"> Connect</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
