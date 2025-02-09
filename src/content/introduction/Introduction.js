import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
  return (
    <div>
      <h1>Introduction to Statistics</h1>
      <p>Welcome to the introduction to statistics! Below are the topics covered in this unit:</p>
      <ul>
        <li><Link to="/introduction/what-is-statistics">What is Statistics?</Link></li>
        <li><Link to="/introduction/types-of-data">Types of Data</Link></li>
        <li><Link to="/introduction/measurement-scales">Measurement Scales</Link></li>
        <li><Link to="/introduction/populations-vs-samples">Populations vs. Samples</Link></li>
        <li><Link to="/introduction/data-visualization">Data Visualization</Link></li>
      </ul>
    </div>
  );
}

export default Introduction;
