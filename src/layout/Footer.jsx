import React from "react";
import Test from '../assets/LogoBlack.png';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <img src={Test} alt="kasa"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;

