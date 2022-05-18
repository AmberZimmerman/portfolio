import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  const navStyle = { textAlign: "center", margin: "15px" };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "7px",
    fontWeight: "600",
    textTransform: "uppercase",
  };
  return (
    <nav style={navStyle}>
      <section
        style={{
          textAlign: "center",
          display: "inline-block",
          fontSize: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <ul>
          <li style={linkStyle}>
            <a
              href="#home"
              onClick={() => handlePageChange("HOME")}
              className={
                currentPage === "HOME" ? "nav-link active" : "nav-link"
              }
            >
              HOME
            </a>
          </li>
          <li style={linkStyle}>
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
          <li style={linkStyle}>
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
          <li style={linkStyle}>
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
          <li style={linkStyle}>
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
      </section>
    </nav>
  );
}
