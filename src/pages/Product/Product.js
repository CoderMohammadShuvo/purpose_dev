import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import "./Product.css";
import Footer from "../../components/Footer/Footer";
export default function Product() {
  return (
    <div className="product">
      <Navbar />
      <SingleProduct />
      <Footer />
    </div>
  );
}
