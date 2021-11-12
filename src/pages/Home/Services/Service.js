import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({service}) => {
  const {name, img, description} = service
  return (
    
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ height:'350px', mt: 2, p: 0, border: 1, boxShadow: 0 }}>
          <CardMedia
            component="img"
            image={img}
            width="100%"
            style={{ height: "200px", margin: "0 auto" ,borderRadius: "5px" }}
            alt="Paella dish"
          />               
          <CardContent sx={{p:2}}>
            <Typography sx={{ color:'gray', fontWeight:'bold'}} variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="p" component="div">
              {description.slice(0, 180)}
            </Typography>
                    
             
          </CardContent>
        </Card>
      </Grid>
  );
};

export default Service;