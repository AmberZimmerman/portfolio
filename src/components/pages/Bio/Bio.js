import React from "react";
import "./Bio.css";

export default function About({ currentPage, handlePageChange }) {
  return (
    <div className="about-style">
      <div className="about-container">
        <h1>Hello, nice to meet you</h1>
        <br></br>
        <p>
          I'm full stack developer with a passion for well executed UX / UI.
          Positioned to provide a unique perspective on how end users interact
          with websites and software platforms by leveraging background in art
          management and years of customer interactions in a retail environment.
          Strong ability to research and identify trends with expertise in
          product buying, merchandising, and consumer psychology. Experience
          with POS integration and training.
        </p>

        <button className="bio-button">
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
