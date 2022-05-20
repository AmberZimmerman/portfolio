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
    // <section style={{ height: "800px", display: "flex" }}>
    //   <div style={leftWorks}>
    //     <h1>Hiiiiiiiiii</h1>
    //   </div>
    //   <div style={rightWorks}>
    //     <div style={worksGrid}>
    //       <div
    //     </div>
    //   </div>
    // </section>

    <section className="container">
      <aside>
        <h2>THIS IS ALL MY PROJECTS!</h2>
        <p>blah blah blah here are my projects</p>
      </aside>
      <div className="card"></div>
    </section>
  );
}
