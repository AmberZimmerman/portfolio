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
    <div style={worksStyle}>
      <div className="works-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h4>{`${project.title}`}</h4>
            <img
              className="works-image"
              src={project.image}
              alt="project screenshot"
            />

            <div className="button-container">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `${project.github}`;
                }}
              >
                Github
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `${project.demo}`;
                }}
              >
                {`${project.demotype}`}
              </button>
            </div>
            <p>{`${project.technology}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
