import "./ContactList.css";
import { useEffect, useState } from "react";
import { Contacts } from "../components/Contacts";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    let contacts = data.contacts;
    for (let contact of contacts) {
      contact.firstName = contact.firstName.slice(0, 1).toUpperCase() + contact.firstName.slice(1);
      contact.lastName = contact.lastName.slice(0, 1).toUpperCase() + contact.lastName.slice(1);
    }
    setContacts(contacts);
  };
  
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <Contacts contacts={contacts} />
    </div>
  );
};
