import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';
import AllProduct from './AllProduct';

const AllProducts = () => {
  return (
    <div>
      <div style={{position:'absolute', marginTop: "0px"}}><Navigation></Navigation></div>
      <AllProduct></AllProduct>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;