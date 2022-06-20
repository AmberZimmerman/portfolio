import React from "react";
import "./Left-hero.css";

export default function leftHero() {
  const leftHeroStyle = {
    backgroundColor: "black",
    flex: "1 0 32%",
    gridArea: "left-hero",
  };

  return (
    <div className="left-hero-style">
      <div className="overlappy-text">
        <div className="my-name-is">MY NAME IS</div>
        <div className="amber-zimmerman">AMBER ZIMMERMAN</div>
        <div className="highlight">I'M A UX/UI DEVELOPER</div>
      </div>
    </div>
  );
}
