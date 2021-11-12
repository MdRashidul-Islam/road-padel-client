import { Grid, Paper, Rating, Typography } from "@mui/material";

import React from "react";

const Review = ({ review }) => {
  const { name, email, rating, text } = review;
  const Ratings = parseInt(rating);
  

  return (
    <>
      <Grid  item xs={12} sm={12} md={4}>
        <Paper elevation={3}>
          <Typography>Name: {name}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>Feedback: {text}</Typography>
         
          <Rating name="size-medium" defaultValue={Ratings} readOnly />
        </Paper>
      </Grid>
    </>
  );
};

export default Review;
