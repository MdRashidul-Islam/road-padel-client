import React from "react";
import Banner from "../Banner/Banner";
import Navigation from "../../shared/Navigation/Navigation";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Services></Services>
      <Footer></Footer>
     
    </div>
  );
};

export default Home;
