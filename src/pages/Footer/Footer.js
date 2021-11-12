import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'



const Footer = () => {
  return (
    <Box className="footer" sx={{mt:4}}>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
        <img className="footer-logo" src="" alt="" />
        <Typography variant="h1" sx={{fontWeight: 'bold', fontSize:"35px"}} className="footer-title">ROAD-PEDAL</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h5" sx={{fontWeight: 'bold'}} className="footer-title">Contact Us</Typography>
        <Typography className="footer-title">Tangail, Dhaka</Typography>
        <Typography className="footer-title">Phone: 01736919983</Typography>
        <Typography className="footer-title">Email: rashidulrony79775@gmail.com</Typography>
        </Grid>
        <Grid id="contact-right" item xs={12} sm={12} md={4}>
        <Typography variant="h6" sx={{mb: 1}} className="footer-title">Subscribe news letter</Typography>
                    <input className="input" type="text" placeholder="Enter your Email" /> <br />
                    <button className="subs-btn">Subscribe</button>
                    
        </Grid>
       
      </Grid>

          
            <p className="copyright">website created by || Rashidul Rony</p>
          </Box>
  );
};

export default Footer;