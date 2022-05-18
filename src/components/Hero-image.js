import React from "react";
import portfolioPhoto from "../images/portfolio-photo.jpg";

export default function heroImage() {
  return (
    <img
      className="photo-of-self"
      src={portfolioPhoto}
      alt="Amber Zimmerman"
    ></img>
  );
}
