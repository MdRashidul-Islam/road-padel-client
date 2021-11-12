import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data =>{
    fetch('http://localhost:5000/allProducts', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.insertedId){
        alert('service add successfully')
        reset()
      }
    })
   
  } 
  return (
    <div>

      <Typography sx={{fontWeight: 'bold', fontSize: '25px', color: '#FFB800'}}> ADD PPRODUCT</Typography>
    <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img", { required: true})} placeholder="Img Link" /> <br/>
      <input {...register("brand", { required: true})} placeholder="Brand Name" /><br/>
      <input {...register("fork")} placeholder="Fork"/><br/>
      <input {...register("color")} placeholder="Color"/><br/>
      <input {...register("rim")} placeholder="Rim"/><br/>
      <input {...register("chain")} placeholder="Chain"/><br/>
      <input {...register("pedal")} placeholder="Pedal"/><br/>
      <input type="number" {...register("price")} placeholder="Price" /><br/>
      <input className="custom-btn" type="submit" value="ADD PRODUCT" /><br/>
    </form>
    </div>
  );
};

export default AddProduct;
