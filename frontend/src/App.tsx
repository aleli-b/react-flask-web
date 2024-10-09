import { useEffect, useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/ContactForm";

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
    <div>
      <ContactList contacts={contacts} />
      <ContactForm />
    </div>
  );
}

export default App;
