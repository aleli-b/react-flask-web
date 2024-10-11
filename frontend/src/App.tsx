import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/ContactForm";
import { Home } from "./pages/Home";
import Navbar from "./layout/Navbar";
import { ContactList } from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<ContactList contacts={contacts} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<ContactForm />} />
        <Route path="/contact-list" element={<ContactList contacts={contacts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
