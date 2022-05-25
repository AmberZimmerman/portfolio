import React from "react";
import "./Works.css";

export default function Works({ projects }) {
  // const leftWorks = {
  //   width: "32%",
  //   backgroundColor: "yellow",
  // };

  // const rightWorks = {
  //   width: "68%",
  //   backgroundColor: "red",
  // };

  // const worksGrid = {
  //   display: "grid",
  //   gridTemplateColumns: "10px 33% 10px 33% 10px 33% 10px",
  // };

  const worksStyle = {
    backgroundColor: "black",
    color: "white",
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
    <div style={worksStyle}>
      <section className="container">
        <aside>
          <h2>THESE ARE ALL MY PROJECTS!</h2>
          <p>blah blah blah here are my projects</p>
        </aside>
      </section>

      <div className="works-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <img
              className="works-image"
              src={project.image}
              alt="project screenshot"
            />
            <h4>{`${project.title}`}</h4>
            <p>{`${project.technology}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
