import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
  const [orderedProducts, setOrderProducts]= useState([]);
  const [reload, setReload] = useState(true);
  

  useEffect(()=>{
    fetch('https://agile-falls-12684.herokuapp.com/orderedProducts')
    .then(res=>res.json())
    .then(data=>setOrderProducts(data));

  },[reload])

   //Delete order product
   const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `https://agile-falls-12684.herokuapp.com/orderedProducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            
            alert("Delete Successfully");
            const remainingProduct = orderedProducts.filter(
              (prod) => prod._id !== id
            );
            setOrderProducts(remainingProduct);
          }
        });
    }
  };

  const handleConfirm=(id)=>{
    const confirm = window.confirm("Are you sure want to Confirm?");
    if(confirm) {
      fetch(`https://agile-falls-12684.herokuapp.com/orderedProducts/${id}`, {
        method: 'PUT',
      })
      .then(res=>res.json())
      .then(data=>{
if(data.modifiedCount===1){
setReload(!reload)
}
      })
    }
  }


  



  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Confirm Order</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedProducts?.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product?.email}
              </TableCell>
              <TableCell align="right">{product?.number}</TableCell>
              <TableCell align="right">{product?.brand}</TableCell>
              <TableCell align="right">{product?.price}</TableCell>
              <TableCell align="right">{product?.status}</TableCell>
              <TableCell align="right"><Button variant="contained" sx={{backgroundColor: 'green', color: 'white'}} onClick={()=>handleConfirm(product._id)}>Confirm</Button></TableCell>
              <TableCell align="right"> <Button variant="contained" sx={{backgroundColor: 'red', color: 'white'}}onClick={()=>handleDelete(product._id)}>delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageAllOrders;