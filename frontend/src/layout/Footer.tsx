import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="left-section">
        <h1>Add a Contact!</h1>
        <p>This is where you would add a contact</p>
      </div>
      <div className="right-section">
        <h1>Links</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
