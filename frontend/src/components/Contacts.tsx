import { useState } from "react";
import { EditModal } from "./EditModal";
import { Button } from "@mui/material";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const Contacts = ({ contacts }: { contacts: Array<Contact> }) => {
  const [open, setOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleOpen = (contact: Contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContact(null);
  };

  const handleSave = async (updatedContact: Contact) => {
    console.log(updatedContact);
    const url = `http://127.0.0.1:5000/contacts/${updatedContact.id}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    };
    const response = await fetch(url, options);
    const data = response.json();
    console.log(data);

    setOpen(false);
    setSelectedContact(null);
  };

  const handleDelete = async (id: number) => {
    const url = `http://127.0.0.1:5000/contacts/${id}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    alert(data.message)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <Button onClick={() => handleOpen(contact)}>Edit</Button>
                <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedContact && (
        <EditModal
          open={open}
          handleClose={handleClose}
          initialData={selectedContact}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
