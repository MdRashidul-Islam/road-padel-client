import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [services, setServices]= useState([]);
  useEffect(()=>{
    fetch('/Services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))


  },[])
  return (
   <Container sx={{minHeight:'80vh'}}>
      <Typography variant="h4" sx={{mt:7, color:'#FFB800', fontWeight:'bold'}}>Our Bicycle Services</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;