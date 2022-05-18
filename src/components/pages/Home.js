import React from "react";
import Nav from "../Nav";
import Lefthero from "../Left-hero";
import Heroimage from "../Hero-image";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div id="home" className="hero">
      <Lefthero />
      <div className="right-hero">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Heroimage />
      </div>
    </div>
  );
}
