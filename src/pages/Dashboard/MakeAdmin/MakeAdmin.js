import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://agile-falls-12684.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        'authorization': `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1>MAKE AN ADMIN</h1>
      <form onSubmit={handleAdminSubmit}>
        <TextField
        sx={{width: '60%', height: '',}}
          id="Outlined-basic"
          // label="Email"
          placeholder="Enter an valid email"
          type="email"
          onBlur={handleOnBlur}
          variant="outlined"
        /> <br />
        <Button variant="contained" sx={{mt:3, padding:"10px 20px"}} type="submit">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">ADMIN CREATED SUCCESSFULLY</Alert>}
    </div>
  );
};

export default MakeAdmin;
