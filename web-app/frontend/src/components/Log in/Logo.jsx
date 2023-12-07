// Logo.js

import React from "react";
import logoImg from "./logo.png";

const Logo = () => {
  return (
    <div style={styles.logo}>
      {/* Include your logo image or any other logo content here */}
      <img
        src={logoImg}
        alt="Logo"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
};

const styles = {
  logo: {
    position: "absolute",
    top: "0px",
    left: "20px",
  },
};

export default Logo;
