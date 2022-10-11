import React from "react";
import "./Header.css";
import img from "../../img/google.png";

const Header = () => {
  return (
    <div className="header">
      <img src={img} alt="" />
    </div>
  );
};

export default Header;
