import React from "react";
import Lefthero from "../../Left-hero/Left-hero";
import Heroimage from "../../Hero-image";
import Bio from "../Bio/Bio";
import "./About.css";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <section className="hero home-grid">
      <Lefthero />
      <Heroimage />
      <Bio currentPage={currentPage} handlePageChange={handlePageChange} />
    </section>
  );
}
