import React from "react";
import "./SingleProduct.css";
import firstimage from "../../assets/Screenshot_1.png";

const SingleProduct = () => {
  return (
    <div className="signleProduct">
      <div className="leftSide">
        <h1>
          name of <br /> ar<span id="tw">tw</span>ork
        </h1>
        <p>
          artist: <strong>Name of Artist</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          vel, ipsam quae explicabo alias earum reprehenderit asperiores omnis
          eveniet ullam hic accusamus, eius magnam assumenda necessitatibus
          dolorum nobis impedit accusantium? Cupiditate, voluptates. Magnam
          repellat, sit quas quis laboriosam dolorum voluptatum.
        </p>
        <p>
          price: <strong>xx</strong> <span className="sol">SOL</span>
        </p>

        <button className="donate">donate</button>
        <button className="bid">bid</button>
      </div>
      <div className="rightSide">
        <img src={firstimage} alt="" />
      </div>
    </div>
  );
};

export default SingleProduct;
