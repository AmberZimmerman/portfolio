import React from "react";

export default function Nav() {
  const navStyle = { textAlign: "center" };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "7px",
    fontWeight: "600",
  };
  return (
    <nav style={navStyle}>
      <section
        style={{
          display: "inline-block",
          fontSize: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <ul>
          <li style={linkStyle}>
            <a href="home">HOME</a>
          </li>
          <li style={linkStyle}>
            <a href="#about">ABOUT</a>
          </li>
          <li style={linkStyle}>
            <a href="#works">WORKS</a>
          </li>
          <li style={linkStyle}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
