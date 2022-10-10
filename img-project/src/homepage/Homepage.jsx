import React from "react";
import "../styles/style.css";
import data from "../helper/data";
import Picture from "../component/Picture";

const Homepage = () => {
  return (
    <div className="pictures">
      {data.map((item, key) => (
        <Picture key={key} data={item} />
      ))}
    </div>
  );
};

export default Homepage;
