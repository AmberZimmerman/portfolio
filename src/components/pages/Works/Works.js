import React from "react";
import "./Works.css";

export default function Works({ projects }) {
  const worksStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div style={worksStyle}>
      <div className="works-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
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
            <h4>{`${project.title}`}</h4>

            <p>{`${project.technology}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
