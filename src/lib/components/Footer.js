import React from "react";
import Image from "../images/bg.jpg";

const FooterStyles = {
  backgroundColor: "red",
};

const Footer = (props) => {
  return (
    <>
      <footer style={FooterStyles}>
        <img src={Image} style={{ width: "500px", height: "50%" }} alt="" />
      </footer>
    </>
  );
};

export default Footer;
