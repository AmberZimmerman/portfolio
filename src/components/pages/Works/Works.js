import React from "react";

export default function Works() {
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
          <li style={linkStyle}>
            <a href="#resume">RESUME</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
