import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";
import Products from "../../components/Home/Products/Products";
import ProductSection from "../../components/Home/ProductSection/ProductSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <ProductSection />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
