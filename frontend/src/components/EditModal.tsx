import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

interface EditModalProps {
  open: boolean;
  handleClose: () => void;
  initialData: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  onSave: (data: {id: number, firstName: string; lastName: string; email: string }) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EditModal: React.FC<EditModalProps> = ({ open, handleClose, initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Contact
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};