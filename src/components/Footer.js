import React from "react";

export default function Footer({ currentPage, handlePageChange }) {
  const footerStyle = {
    display: "flex",
    width: "100%",
    position: "fixed",
    // zIndex: "9",
    bottom: "0",
    backgroundColor: "rgba(200, 40, 30, .5)",
  };

  // const footerLinkStyle = {
  //   textDecoration: "none",
  //   color: "white",
  //   padding: "10px",
  //   fontWeight: "600",
  //   textTransform: "uppercase",
  //   backgroundColor: "rgb(5, 51, 53)",
  //   height: "100%",
  //   display: "flex",
  //   width: "70%",
  // };

  return (
    <div style={footerStyle}>
      <h3>Amber Zimmermans Portfolio 2022</h3>
    </div>
  );
}
