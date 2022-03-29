import React from "react";
import "./Products.css";
import firstImg from "../../../assets/Screenshot_1.png";
import secondImg from "../../../assets/Screenshot_2.png";
import thirdImg from "../../../assets/Screenshot_4.png";
import fourthImg from "../../../assets/Screenshot_3.png";
import { Routes, Route, Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <a href="">gallary</a>
      <div className="artistArea">
        <div className="artistLeft">
          <p>
            artist: <strong>Name of Artist</strong>
          </p>
          <p>
            collection: <strong>Collection Name</strong>
          </p>
        </div>
        <div className="artistRightSide">
          <button id="shrt">short by</button>
          <div className="option">
            <a href="">rarity</a>
            <a href="">most popular</a>
            <a href="">highest price</a>
            <a href="">lowest price</a>
          </div>
        </div>
      </div>
      <div className="collectionArea">
        <div className="fistLine">
          <Link to="/firstImg" id="firstImageProd">
            <img src={firstImg} alt="" />
          </Link>

          <img src={secondImg} alt="" />

          <img src={thirdImg} alt="" />
        </div>

        <div className="fistLine">
          <img src={firstImg} alt="" />

          <img src={secondImg} alt="" />

          <img src={thirdImg} alt="" />
        </div>

        <div className="fistLine">
          <img src={firstImg} alt="" />

          <img src={secondImg} alt="" />

          <img src={thirdImg} alt="" />
        </div>
      </div>
      <button id="show_more">show more</button>
    </div>
  );
};

export default Products;
