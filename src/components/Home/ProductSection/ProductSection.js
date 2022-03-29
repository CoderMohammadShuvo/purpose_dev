import React from "react";
import "./ProductSection.css";
import ProductMainImage from "../../../assets/Screenshot_5.png";
const ProductSection = () => {
  return (
    <div className="productSection">
      <div className="heroSection">
        <div className="leftSide">
          <h1>
            na<span className="me">me</span> of ngo xxx
          </h1>
          <p>
            purpose: <strong>summary of course</strong>
          </p>
          <p>
            Details. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis dolorem labore eos quia, excepturi earum repellat mollitia
            a dolore dolores tempora commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi.
          </p>
        </div>
        <div className="rightSide">
          <img src={ProductMainImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
