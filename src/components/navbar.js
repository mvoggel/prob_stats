import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/probability.js">Probability</Link></li>
        <li><Link to="/statistics.js">Statistics</Link></li>
        <li><Link to="/bayesian.js">Bayesian Statistics</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
