import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  
  const { _id, brand, img, fork, price } = product;
  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card className="product-hover" sx={{ height:'380px', mt: 2, p: 2, border: "1px solid gray", boxShadow: 0 }}>
          <CardMedia
            component="img"
            image={img}
            width="100%"
            style={{ height: "200px", margin: "0 auto" }}
            alt="Paella dish"
          />               
          <CardContent>
            <Typography variant="h5"
            sx={{fontWeight: "bold"}} component="div">
             Brand: {brand.slice(0,24)}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
             Fork:  {fork}
            </Typography>
            <Typography
              sx={{ fontSize: 14, fontWeight: 'bold' }}
              color="text.secondary"
              gutterBottom
            >Price: 
              {price}
            </Typography>
            <Link  to={`/bookingProduct/${_id}`}>
              <button className="custom-btn">Buy Now</button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Product;
