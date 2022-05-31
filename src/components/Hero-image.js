import React from "react";
import portfolioPhoto from "../images/former-images/portfolio-photo.jpg";

export default function heroImage() {
  const rightHero = {
    background: "rgb(5, 51, 53)",
    flex: "1 0 68%",
    height: "fit-content",
    flexFlow: "column",
    display: "flex",
    overflow: "hidden",
    gridArea: "hero-image",
  };

  const photoOfSelf = {
    display: "block",
    height: "auto",
    width: "100%",
  };

  return (
    <div style={rightHero}>
      <img style={photoOfSelf} src={portfolioPhoto} alt="Amber Zimmerman"></img>
    </div>
  );
}
