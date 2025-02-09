import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openUnits, setOpenUnits] = useState({});

  const toggleUnit = (unit) => {
    setOpenUnits((prev) => ({
      ...prev,
      [unit]: !prev[unit],
    }));
  };

  const courseUnits = [
    { title: "Introduction", subsections: ["Overview", "Why Study Statistics?"] },
    { title: "Probability Theory", subsections: ["Basic Probability", "Bayes’ Theorem", "Random Variables"] },
    { title: "Descriptive Statistics", subsections: ["Mean, Median, Mode", "Variance & Standard Deviation", "Histograms"] },
    { title: "Inferential Statistics", subsections: ["Confidence Intervals", "Hypothesis Testing", "P-values"] },
    { title: "Regression & Correlation", subsections: ["Linear Regression", "Correlation Coefficients"] },
  ];

  return (
    <div style={{ width: "250px", padding: "10px", background: "#f8f9fa", height: "100vh", borderRight: "1px solid #ddd" }}>
      <h2>Course Units</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courseUnits.map((unit, index) => (
          <li key={index}>
            <div onClick={() => toggleUnit(unit.title)} style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "5px" }}>
              {unit.title} {openUnits[unit.title] ? "▼" : "▶"}
            </div>
            {openUnits[unit.title] && (
              <ul style={{ paddingLeft: "15px" }}>
                {unit.subsections.map((sub, subIndex) => (
                  <li key={subIndex} style={{ marginBottom: "3px" }}>
                    <Link to={`/${unit.title.toLowerCase().replace(/ /g, "-")}/${sub.toLowerCase().replace(/ /g, "-")}`} style={{ textDecoration: "none", color: "black" }}>
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
