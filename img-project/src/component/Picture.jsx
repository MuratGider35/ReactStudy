import React from "react";
import "../styles/style.css";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>

      <p className="info">{data.photographer}</p>
    </div>
  );
};

export default Picture;
