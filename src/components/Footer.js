import React from "react";

export default function Footer({ currentPage, handlePageChange }) {
  const footerStyle = {
    display: "flex",
    width: "100%",
    bottom: "0",
    height: "60px",
  };

  const footerLinkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "10px",
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "rgb(5, 51, 53)",
    height: "100%",
    display: "flex",
    width: "50%",
  };

  const footerName = {
    textDecoration: "none",
    color: "white",
    padding: "10px",
    fontWeight: "400",
    textTransform: "uppercase",
    backgroundColor: "rgb(5, 51, 53)",
    height: "100%",
    display: "flex",
    width: "50%",
    justifyContent: "end",
    alignContent: "center",
  };

  return (
    <div style={footerStyle}>
      <div style={footerLinkStyle}>
        <a href="https://github.com/AmberZimmerman">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/amberz-designs/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="mailto:developwithamber@gmail.com">
          <i className="fa-solid fa-paper-plane"></i>
        </a>
        {/* <a href="https://github.com/AmberZimmerman">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </a> */}
      </div>
      <div style={footerName}>
        <p style={{ alignSelf: "center" }}>
          &copy; Amber Zimmermans Portfolio 2022
        </p>
      </div>
    </div>
  );
}
