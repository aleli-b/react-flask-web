import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="left-section">
        <h1>Add a Contact!</h1>
        {/* <p>This is where you would add a contact</p> */}
        <form>
          <input type="text" placeholder="Write your email" className="contact" />
          <button type="submit">{">"}</button>
        </form>
      </div>
      <div className="right-section">
        <div className="left-right-section">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Add Contact</Link>
            </li>
            <li>
              <Link to="/">Contact List</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="right-right-section">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Add Contact</Link>
            </li>
            <li>
              <Link to="/">Contact List</Link>
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
