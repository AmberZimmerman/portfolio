import React from "react";
import Lefthero from "../Left-hero";
import Heroimage from "../Hero-image";
import About from "../About";
import "./Home.css";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <section className="hero home-grid">
      <Lefthero />
      <Heroimage />
      <About currentPage={currentPage} handlePageChange={handlePageChange} />
    </section>
  );
}
