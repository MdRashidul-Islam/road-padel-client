import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import img from "../../../images/Authentication-rafiki.png";
import useAuth from "../../../hooks/useAuth";
import './Login.css'
import { Box } from "@mui/system";
import Navigation from "../../shared/Navigation/Navigation";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, loginWithEmail, error, loginWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginWithEmail(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogle = () => {
    loginWithGoogle(location, history);
  };

  return (
   <Box>
     <Navigation></Navigation>
     <br />
      <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} sx={{ mt: 5, w: 100 }}>
          <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', fontWeight: 'bold', color: '#1565C0'}}>
            Login
          </Typography>

          {/* login form start  */}

          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "80%", mb: 3 }}
              type="email"
              id="outlined-basic"
              label="Email"
              name="email"
              onChange={handleOnChange}
              variant="outlined"
            />{" "}
            <br />
            <TextField
              sx={{ width: "80%", mb: 2 }}
              type="password"
              id="outlined-basic"
              label="Password"
              name="password"
              onChange={handleOnChange}
              variant="outlined"
            />{" "}
            <br />
            <Button
              type="submit"
              sx={{ width: "80%", mb: 2, }}
              variant="contained"
            >
              Login
            </Button>{" "}
            <br />
            <NavLink to="/register" className="newUser-text">NEW USER? PLEASE REGISTER</NavLink>
            <Box className="spinner">{isLoading  && <CircularProgress />}</Box>
            {user?.email && (
              <Alert severity="success">Login Successfully</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </form>
          {/* login form end  */}

          <Typography variant="h5" sx={{color: '#1565C0', fontWeight: 'bold'}}>OR</Typography>
          <Button
            onClick={handleGoogle}
            sx={{ width: "80%", mb: 2 }}
            variant="contained"
          >
            Sign In With Google
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img width="100%" src={img} alt="" />
        </Grid>
      </Grid>
    </Container>
   </Box>
  );
};

export default Login;
