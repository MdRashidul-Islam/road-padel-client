import {  Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import './BookingProduct.css'
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../shared/Navigation/Navigation";

const BookingProduct = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();

 


  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productId]);

  const onSubmit = (data) => {
    data.status = "Panding";
    data.price = productDetails?.price;
    data.brand = productDetails?.brand;
    data.img= productDetails?.img;
    
    fetch("http://localhost:5000/orderedProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order successfully");
        }
        reset();
      });
  };

  return (
    <>
    <Box sx={{marginTop: 2,}}>
<Navigation></Navigation>
    </Box>
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid sx={{marginTop:'40px'}}  className="product-details" item xs={12} sm={12} md={6}>
          <img width="60%" src={productDetails.img} alt="" />
          
         <Box sx={{textAlign: 'start', marginLeft:'180px'}}>
         <Typography variant="h6">
          <span>Brand:</span> {productDetails.brand}
          </Typography>
          <Typography>
           <span>Chain:</span> {productDetails.chain}
          </Typography>
          <Typography>
          <span>Color:</span> {productDetails.color}
          </Typography>
          <Typography>
          <span>Fork:</span> {productDetails.fork}
          </Typography>
          <Typography>
          <span>Rim:</span> {productDetails.rim}
          </Typography>
          <Typography>
          <span>Pedal:</span> {productDetails.pedal}
          </Typography>
          <Typography variant="h6">
          <span>Price:</span> {productDetails.price}
          </Typography>
         </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <form className="details-form" onSubmit={handleSubmit(onSubmit)}>
           
            <input {...register("name")} defaultValue={user?.displayName} />{" "}
            <br />
            <input {...register("email")} defaultValue={user?.email} /> <br />
            <input {...register("brand")} defaultValue={productDetails.brand} />
            <br />
            <input {...register("price")} defaultValue={productDetails.price} />
            <input {...register("number")} placeholder="Phone Number" />
            <br />
            <br />
            <input type="submit" value="Place Order" className="custom-btn"/>
          </form>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default BookingProduct;
