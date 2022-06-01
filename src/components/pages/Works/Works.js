import React from "react";
import "./Works.css";

export default function Works({ projects }) {
  const worksStyle = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={worksStyle}>
      <div className="works-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <div className="image-container">
              <div className="image-overlay">
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
              </div>
              <img
                className="works-image"
                src={project.image}
                alt="project screenshot"
              />
            </div>

            <h4>{`${project.title}`}</h4>

            <p>{`${project.technology}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
