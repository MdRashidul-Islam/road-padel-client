import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  CircularProgress,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import img from "../../../images/Authentication-rafiki.png";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import Navigation from "../../shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
   <Box>
     <Navigation></Navigation>
     <br />
 <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} sx={{ mt: 5, w: 100 }}>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', fontWeight: 'bold', color: '#1565C0'}}>
            Register
          </Typography>

          {/* login form start  */}

          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "80%", mb: 3 }}
                type="text"
                id="outlined-basic"
                label="Name"
                name="name"
                onBlur={handleOnBlur}
                variant="outlined"
              />{" "}
              <TextField
                sx={{ width: "80%", mb: 3 }}
                type="email"
                id="outlined-basic"
                label="Email"
                name="email"
                onBlur={handleOnBlur}
                variant="outlined"
              />{" "}
              <br />
              <TextField
                sx={{ width: "80%", mb: 2 }}
                type="password"
                id="outlined-basic"
                label="Password"
                name="password"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "80%", mb: 2 }}
                type="password"
                id="outlined-basic"
                label="Retype-Password"
                name="password2"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <br />
              <Button
                type="submit"
                sx={{ width: "80%", mb: 2 }}
                variant="contained"
              >
                Register
              </Button>{" "}
              <br />
              <NavLink to="/login" className="newUser-text">ALREADY USER? PLEASE LOGIN</NavLink>
            </form>
          )}
          {/* login form end  */}

          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Register Successfully</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img width="100%" src={img} alt="" />
        </Grid>
      </Grid>
    </Container>
   </Box>
  );
};

export default Register;
