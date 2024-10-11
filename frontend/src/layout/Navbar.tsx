import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-contact">Add Contact</Link>
        </li>
        <li>
          <Link to="/contact-list">Contact List</Link>
        </li>
      </ul>
    </nav>
  );
}