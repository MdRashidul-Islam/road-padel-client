import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
  const [allProducts, setAllProducts]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/allProducts`)
    .then(res=>res.json())
    .then(data=>setAllProducts(data));
  },[])

  // Delete order product
  const handleDelete = (id) => {
   
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/allProducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Successfully");
            const remainingProduct = allProducts.filter(
              (prod) => prod._id !== id
            );
            setAllProducts(remainingProduct);
          }
        });
    }
  };



  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
        <TableHead>
          <TableRow>
            <TableCell align="right">IMG</TableCell>
            <TableCell align="center">PRODUCT ID</TableCell>
            <TableCell align="right">PRODUCT NAME</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">DELETE PRODUCT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts?.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {product?.email}
              </TableCell> */}
              <TableCell align="right"><img src={product?.img} width="40px" alt="" /></TableCell>
              <TableCell align="right">{product?._id}</TableCell>
              <TableCell align="right">{product?.brand}</TableCell>
             
              <TableCell align="right">{product?.price}</TableCell>
              
              <TableCell align="right"> <Button variant="contained" sx={{backgroundColor: 'red', color: 'white'}}onClick={()=>handleDelete(product._id)}>delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageProducts;