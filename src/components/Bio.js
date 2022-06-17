import React from "react";

export default function About({ currentPage, handlePageChange }) {
  const aboutStyle = {
    backgroundColor: "rgb(5, 51, 53)",
    width: "100vw",
    height: "fit-content",
    color: "white",
    gridArea: "about",
    padding: "6rem 12rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  };

  let bioButton = {
    width: "fit-content",
    borderRadius: "8px",
    height: "40px",
    background: "black",
    padding: "4px",
  };

  return (
    <div style={aboutStyle}>
      <div style={{ maxWidth: "1000px" }}>
        <h1 style={{ display: "block" }}>Hello, nice to meet you</h1>
        <br></br>
        <p style={{ fontSize: "1.5rem" }}>
          I'm full stack developer with a passion for well executed UX / UI.
          Positioned to provide a unique perspective on how end users interact
          with websites and software platforms by leveraging background in art
          management and years of customer interactions in a retail environment.
          Strong ability to research and identify trends with expertise in
          product buying, merchandising, and consumer psychology. Experience
          with POS integration and training.
        </p>

        <button style={bioButton}>
          <a
            href="#resume"
            onClick={() => handlePageChange("RESUME")}
            className={
              currentPage === "RESUME" ? "nav-link active" : "nav-link"
            }
          >
            VIEW RESUME
          </a>
        </button>
      </div>
    </div>
  );
}
