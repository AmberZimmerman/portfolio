import React from "react";
import Lefthero from "../Left-hero";
import Heroimage from "../Hero-image";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <section className="hero">
      <Lefthero />
      <Heroimage />
    </section>
  );
}
