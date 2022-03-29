import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/purpose_logo-08.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img id="logo" src={Logo} alt="" />
      <button
        onClick={() => {
          window.solana.connect();
          window.solana.request({ method: "connect" });
        }}
        id="connectWalletButton"
      >
        connect wallet
      </button>
    </div>
  );
};

export default Navbar;
