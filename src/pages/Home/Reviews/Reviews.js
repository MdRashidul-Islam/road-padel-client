import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://agile-falls-12684.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <Container>
      <h1 style={{color: '#ffb800'}}>CUSTOMER REVIEW</h1>
      {reviews.length === 0 ?
        <CircularProgress sx={{color:"blue", mt: 4, mb:4}} />
      :
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Grid>
        
      }
    </Container>
  );
};

export default Reviews;
