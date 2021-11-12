import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "../Home/Products/Product";



const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box sx={{marginBottom: '50px'}}>
    <Container>
      <br />
      <br />
     
      <Typography variant="h3" sx={{color:'#FFB800', mt:4, mb:1, fontWeight:'bold'}}>Find Your Next Bicycle</Typography>
     {products.length===0?
      <CircularProgress sx={{color:"blue", mt: 4, mb:4, padding:"20px"}} />
     :
     <Grid
     container
     spacing={{ xs: 2, md: 3 }}
     columns={{ xs: 4, sm: 8, md: 12 }}
   >
     {products.map((product) => (
       <Product product={product} key={product._id}></Product>
     ))}
   </Grid>

     }
    </Container>
    </Box>
  );
};

export default AllProduct;
