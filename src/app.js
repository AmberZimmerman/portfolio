import React from "react";
import "./app.css";
import Nav from "./components/nav";
import Lefthero from "./components/left-hero";
import Heroimage from "./components/hero-image";

export default function App() {
  return (
    <div id="home" class="hero">
      <Lefthero />
      <div class="right-hero">
        <Nav />
        <Heroimage />
      </div>
    </div>
  );
}
