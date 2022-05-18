import React from "react";

export default function leftHero() {
  const leftHeroStyle = {
    backgroundColor: "black",
    flex: "1 0 30%",
  };

  return (
    <div className="left-hero" style={leftHeroStyle}>
      <h1
        style={{
          fontSize: "30px",
          color: "white",
          textAlign: "center",
          margin: "0 7",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        PORTFOLIO
      </h1>
      <div className="overlappy-text">
        <div className="my-name-is">MY NAME IS</div>
        <div className="amber-zimmerman">AMBER ZIMMERMAN</div>
        <div className="highlight">I'M A UX/UI DEVELOPER</div>
      </div>
    </div>
  );
}
