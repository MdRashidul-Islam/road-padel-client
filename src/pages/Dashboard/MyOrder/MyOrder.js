import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orderedProduct, setOrderProduct] = useState([]);

  useEffect(() => {
    fetch(
      `https://agile-falls-12684.herokuapp.com/orderedProduct/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderProduct(data));
  }, [user.email]);

  //Delete order product
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `https://agile-falls-12684.herokuapp.com/orderedProduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Successfully");
            const remainingProduct = orderedProduct.filter(
              (prod) => prod._id !== id
            );
            setOrderProduct(remainingProduct);
          }
        });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Img</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedProduct?.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={product?.img} width="40px" alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                {product?.email}
              </TableCell>
              <TableCell align="right">{product?.number}</TableCell>
              <TableCell align="right">{product?.brand}</TableCell>
              <TableCell align="right">{product?.price}</TableCell>
              <TableCell align="right">{product?.status}</TableCell>
              <TableCell align="right">
                {" "}
                <button
                  className="custom-button"
                  onClick={() => handleDelete(product._id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyOrder;
