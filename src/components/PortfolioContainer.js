import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import projects from "./projects";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("HOME");

  const renderPage = () => {
    if (currentPage === "HOME") {
      return <Home />;
    }
    if (currentPage === "ABOUT") {
      return <About />;
    }
    if (currentPage === "WORKS") {
      return <Works projects={projects} />;
    }
    if (currentPage === "CONTACT") {
      return <Contact />;
    }
    if (currentPage === "RESUME") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
