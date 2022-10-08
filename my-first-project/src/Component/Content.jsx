import React from "react";
import img2 from "../img/spring2.jpg";

const Content = () => {
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1rem auto",
  };
  return (
    <div>
      <h2 style={{ color: "red" }}>React Js</h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        React, kullanıcı arabirimi tasarlamak için kullanılan kütüphanesidir
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="img1"
      />
      <img style={imgStyle} src={img2} alt="img2" />
      <p className="par-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quaerat
        exercitationem repellendus, perspiciatis quo beatae magni distinctio
        quis ullam mollitia cupiditate ipsa consectetur asperiores? Illum dolore
        at, quidem nulla consequatur reiciendis cupiditate eius iusto fugit
        omnis dolorum quis odio ut?
      </p>
    </div>
  );
};
export default Content;
