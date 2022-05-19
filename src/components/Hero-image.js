import React from "react";
import portfolioPhoto from "../images/portfolio-photo.jpg";

export default function heroImage() {
  return (
    <div className="right-hero">
      <img
        className="photo-of-self"
        src={portfolioPhoto}
        alt="Amber Zimmerman"
      ></img>
    </div>
  );
}
