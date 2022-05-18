import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Lefthero from "./components/Left-hero";
import Heroimage from "./components/Hero-image";

export default function App() {
  return (
    <div id="home" className="hero">
      <Lefthero />
      <div className="right-hero">
        <Nav />
        <Heroimage />
      </div>
    </div>
  );
}
