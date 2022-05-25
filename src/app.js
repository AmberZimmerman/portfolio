import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PortfolioContainer from "./components/PortfolioContainer";

library.add(fab, faEnvelope);

export default function App() {
  return (
    <div>
      <PortfolioContainer />
    </div>
  );
}
