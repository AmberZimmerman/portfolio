import React from "react";

export default function Works() {
  const leftWorks = {
    width: "32%",
    backgroundColor: "yellow",
  };

  const rightWorks = {
    width: "68%",
    backgroundColor: "red",
  };

  const worksGrid = {
    display: "grid",
    gridTemplateColumns: "10px 33% 10px 33% 10px 33% 10px",
  };

  return (
    <section style={{ height: "800px", display: "flex" }}>
      <div style={leftWorks}>
        <h1>Hiiiiiiiiii</h1>
      </div>
      <div style={rightWorks}>
        <div style={worksGrid}></div>
      </div>
    </section>
  );
}
