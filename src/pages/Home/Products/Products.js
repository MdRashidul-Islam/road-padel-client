import { CircularProgress, Container, Grid, Typography } from "@mui/material";


import React, { useEffect, useState } from "react";


import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://agile-falls-12684.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const homeProducts= products.slice(0, 6);


  return (
   
      <Container>
      <Typography variant="h4" sx={{color:'#FFB800', mt:4, mb:1, fontWeight:'bold'}}>Find Your Next Bicycle</Typography>
     {products.length===0 ? 
     <CircularProgress sx={{color:"blue", mt: 4, mb:4}} />
    :
    <Grid
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
  >     
      {products?.slice(0, 6)?.map((product) => (
      <Product product={product} key={product._id}></Product>
    ))}
          
    
  </Grid>
    }
    </Container>

  
  );
};

export default Products;
