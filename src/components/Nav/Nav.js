import React from "react";
import "./Nav.css";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="nav-space">
      <nav className="nav-style">
        <section className="nav-section-style">
          <div className="portfolio left-nav">
            <h1 className="portfolio-word">PORTFOLIO</h1>
          </div>

          <div className="right-nav">
            <ul style={{ display: "flex" }}>
              <li className="link-style">
                <a
                  href="#about"
                  onClick={() => handlePageChange("ABOUT")}
                  className={
                    currentPage === "ABOUT" ? "nav-link active" : "nav-link"
                  }
                >
                  ABOUT
                </a>
              </li>
              <li className="link-style">
                <a
                  href="#works"
                  onClick={() => handlePageChange("WORKS")}
                  className={
                    currentPage === "WORKS" ? "nav-link active" : "nav-link"
                  }
                >
                  WORKS
                </a>
              </li>
              <li className="link-style">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("CONTACT")}
                  className={
                    currentPage === "CONTACT" ? "nav-link active" : "nav-link"
                  }
                >
                  CONTACT
                </a>
              </li>
              <li className="link-style">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("RESUME")}
                  className={
                    currentPage === "RESUME" ? "nav-link active" : "nav-link"
                  }
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}
