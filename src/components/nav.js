import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  const navStyle = { display: "flex", width: "100%" };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "7px",
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "rgb(5, 51, 53)",
    height: "100%",
    display: "flex",
    width: "70%",
  };

  return (
    <div style={{ flexWrap: "wrap" }}>
      <nav style={navStyle}>
        <section
          style={{
            textAlign: "center",
            fontSize: "20px",
            justifyContent: "space-evenly",
            width: "100%",
            display: "flex",
          }}
        >
          <div
            className="portfolio"
            style={{
              backgroundColor: "black",
              height: "100%",
              display: "flex",
              width: "32%",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                color: "white",
                textAlign: "center",
                margin: "0px",
                fontFamily: "Raleway, sans-serif",
              }}
            >
              PORTFOLIO
            </h1>
          </div>

          <div
            className="links"
            style={{
              display: "flex",
              width: "68%",
              backgroundColor: "rgb(5, 51, 53)",
              justifyContent: "center",
            }}
          >
            <ul style={{ display: "flex" }}>
              <li style={linkStyle}>
                <a
                  href="#home"
                  onClick={() => handlePageChange("HOME")}
                  className={
                    currentPage === "HOME" ? "nav-link active" : "nav-link"
                  }
                >
                  HOME
                </a>
              </li>
              <li style={linkStyle}>
                <a
                  href="#about"
                  onClick={() => handlePageChange("ABOUT")}
                  className={
                    currentPage === "ABOUT" ? "nav-link active" : "nav-link"
                  }
                >
                  ABOUT
                </a>
              </li>
              <li style={linkStyle}>
                <a
                  href="#works"
                  onClick={() => handlePageChange("WORKS")}
                  className={
                    currentPage === "WORKS" ? "nav-link active" : "nav-link"
                  }
                >
                  WORKS
                </a>
              </li>
              <li style={linkStyle}>
                <a
                  href="#contact"
                  onClick={() => handlePageChange("CONTACT")}
                  className={
                    currentPage === "CONTACT" ? "nav-link active" : "nav-link"
                  }
                >
                  CONTACT
                </a>
              </li>
              <li style={linkStyle}>
                <a
                  href="#resume"
                  onClick={() => handlePageChange("RESUME")}
                  className={
                    currentPage === "RESUME" ? "nav-link active" : "nav-link"
                  }
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}
