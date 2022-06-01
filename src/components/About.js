import React from "react";

export default function About({ currentPage, handlePageChange }) {
  const aboutStyle = {
    backgroundColor: "rgb(5, 51, 53)",
    width: "100vw",
    height: "fit-content",
    color: "white",
    display: "block",
    gridArea: "about",
    padding: "6rem 12rem",
    textAlign: "center",
  };

  return (
    <div style={aboutStyle}>
      <h1 style={{ display: "block" }}>Hello, nice to meet you</h1>
      <br></br>
      <p style={{ fontSize: "1.5rem" }}>
        I'm full stack developer with a passion for well executed UX / UI.
        Positioned to provide a unique perspective on how end users interact
        with websites and software platforms by leveraging background in art
        management and years of customer interactions in a retail environment.
        Strong ability to research and identify trends with expertise in product
        buying, merchandising, and consumer psychology. Experience with POS
        integration and training.
      </p>

      <button>
        <a
          href="#resume"
          onClick={() => handlePageChange("RESUME")}
          className={currentPage === "RESUME" ? "nav-link active" : "nav-link"}
        >
          VIEW RESUME
        </a>
      </button>
    </div>
  );
}
