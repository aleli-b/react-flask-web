import { Box, Button } from "@mui/material";
import { useState } from "react";

export const ContactForm = () => {
  const backUrl = import.meta.env.VITE_BACK_URL;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email,
      }),
    };
    const url = `${backUrl}/contacts`
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (data.status != 201 && response.status != 200) {
      alert(data.message);
    } else {
      alert("Contact added successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  };

  return (
    <Box>
      <form onSubmit={addUser}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Button variant="contained" type="submit">
            Add Contact
          </Button>
        </Box>
      </form>
    </Box>
  );
};
