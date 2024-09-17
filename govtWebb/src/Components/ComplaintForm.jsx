import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Complaint submitted by ${name} regarding illegal construction at ${location}`);
    // Submit complaint logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <Typography variant="h5" className="mb-6">Submit Complaint</Typography>
      <form className="bg-gray-100 p-6 rounded-lg w-full max-w-md" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          className="mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Location"
          fullWidth
          variant="outlined"
          className="mb-4"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          className="mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Submit Complaint
        </Button>
      </form>
    </div>
  );
};

export default ComplaintForm;
