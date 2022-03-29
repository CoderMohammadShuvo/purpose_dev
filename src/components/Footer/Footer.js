import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/purpose_logo-08.png";
import Discord from "../../assets/purpose_discord-04.png";
import Whatsapp from "../../assets/purpose_whatsapp-05.png";
import Instagram from "../../assets/purpose_instagram-06.png";
import Email from "../../assets/purpose_email-07.png";
import PurposeWhiteLogo from "../../assets/purpose logo_white-06.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerleftSide">
          <img src={PurposeWhiteLogo} alt="" />
        </div>
        <div className="footerright">
          <img src={Discord} alt="" />
          <img src={Whatsapp} alt="" />
          <img src={Instagram} alt="" />
          <img src={Email} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
