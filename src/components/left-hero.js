import React from "react";

export default function leftHero() {
  const leftHeroStyle = {
    backgroundColor: "black",
    flex: "1 0 30%",
  };

  return (
    <div class="left-hero" style={leftHeroStyle}>
      <h1>PORTFOLIO</h1>
      <div class="overlappy-text">
        <div class="my-name-is">MY NAME IS</div>
        <div class="amber-zimmerman">AMBER ZIMMERMAN</div>
        <div class="highlight">I'M A UX/UI DEVELOPER</div>
      </div>
    </div>
  );
}
