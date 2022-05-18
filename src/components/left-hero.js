import React from "react";

export default function leftHero() {
  const leftHeroStyle = {
    backgroundColor: "black",
    flex: "1 0 30%",
  };

  return (
    <div className="left-hero" style={leftHeroStyle}>
      <h1>PORTFOLIO</h1>
      <div className="overlappy-text">
        <div className="my-name-is">MY NAME IS</div>
        <div className="amber-zimmerman">AMBER ZIMMERMAN</div>
        <div className="highlight">I'M A UX/UI DEVELOPER</div>
      </div>
    </div>
  );
}
