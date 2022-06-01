import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume";
import projects from "../projects";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("HOME");

  const renderPage = () => {
    if (currentPage === "HOME") {
      return <Home />;
    }
    // if (currentPage === "ABOUT") {
    //   return <About />;
    // }
    if (currentPage === "WORKS") {
      return <Works projects={projects} />;
    }
    if (currentPage === "CONTACT") {
      return <Contact />;
    }
    if (currentPage === "RESUME") {
      return <Resume />;
    }
    return;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section style={{ backgroundColor: "black" }}>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </section>
  );
}
