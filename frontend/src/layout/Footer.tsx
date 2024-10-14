import { Link } from "react-router-dom";
import "./Footer.css";

interface Link {
  name: string;
  url: string;
}

export const Footer = () => {
  const links: Link[] = [{
   name: "Home",
    url: "/" 
  },
  {
    name: "Add Contact",
    url: "/add-contact"
  },
  {
    name: "Contact List",
    url: "/contact-list"
  },
  {
    name: "Gnome",
    url: "/"
  },
  {
    name: "Rome",
    url: "/"
  }
];
  return (
    <footer>
      <div className="left-section">
        <h1>Add a Contact!</h1>
        <form>
          <input
            type="text"
            placeholder="Write your email"
            className="contact"
          />
          <button type="submit">{">"}</button>
        </form>
      </div>
      <div className="right-section">
        <div className="left-right-section">
          <h3>Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}            
          </ul>
        </div>
        <div className="right-right-section">
          <h3>Links</h3>
          <ul>
          {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
