import React from "react";
import "./Present.css";

import accretion from "../../../images/accretion-slides/accretion.svg";
import accretion1 from "../../../images/accretion-slides/accretion-1.svg";
import accretion2 from "../../../images/accretion-slides/accretion-2.svg";
import accretion3 from "../../../images/accretion-slides/accretion-3.svg";
import accretion4 from "../../../images/accretion-slides/accretion-4.svg";
import accretion5 from "../../../images/accretion-slides/accretion-5.svg";
import accretion6 from "../../../images/accretion-slides/accretion-6.svg";
import accretion7 from "../../../images/accretion-slides/accretion-7.svg";
import accretion8 from "../../../images/accretion-slides/accretion-8.svg";
import accretion9 from "../../../images/accretion-slides/accretion-9.svg";
import accretion10 from "../../../images/accretion-slides/accretion-10.svg";

export default function Present() {
  return (
    <div className="present-page">
      <div className="present-img-container">
        <div className="about-container">
          <h1>Presentation Example - Accretion</h1>
          <br></br>
          <p style={{ color: "white", textAlign: "center" }}>
            These are the slides from a presentation done with a team for a
            project called Accretion - a CRUD application developed for a USGS
            employee. Project slides, color choices, images and creative
            direction were primarily completed by me. Wireframes, created by me
            and shown below, were made using Adobe InDesign.
          </p>
        </div>

        <img
          className="present-image"
          src={accretion}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion1}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion2}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion3}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion4}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion5}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion6}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion7}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion8}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion9}
          alt="Accretion slide one"
        />

        <img
          className="present-image"
          src={accretion10}
          alt="Accretion slide one"
        />
      </div>
    </div>
  );
}
