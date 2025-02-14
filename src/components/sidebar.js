import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [openUnits, setOpenUnits] = useState({});

  const toggleUnit = (unit) => {
    setOpenUnits((prev) => ({
      ...prev,
      [unit]: !prev[unit],
    }));
  };

  const courseUnits = [
    { title: "Introduction to Statistics", path: "/introduction", subsections: [
        { title: "What is Statistics?", path: "/introduction/what-is-statistics" },
        { title: "Types of Data", path: "/introduction/types-of-data" },
        { title: "Measurement Scales", path: "/introduction/measurement-scales" },
        { title: "Populations vs. Samples", path: "/introduction/populations-vs-samples" },
        { title: "Data Visualization", path: "/introduction/data-visualization" },
      ]
    },
    { title: "Descriptive Statistics", path: "/descriptive-statistics", subsections: [
        { title: "Mean, Median, Mode", path: "/descriptive-statistics/central-tendency" },
        { title: "Variance & Standard Deviation", path: "/descriptive-statistics/variance" },
        { title: "Z-Scores & Standardization", path: "/descriptive-statistics/z-scores" },
        { title: "Skewness & Kurtosis", path: "/descriptive-statistics/skewness" },
        { title: "Boxplots & Outliers", path: "/descriptive-statistics/boxplots" },
      ]
    },
    { title: "Probability Theory", path: "/probability", subsections: [
        { title: "Basic Probability", path: "/probability/basic-probability" },
        { title: "Set Operations", path: "/probability/set-operations" },
        { title: "Conditional Probability", path: "/probability/conditional-probability" },
        { title: "Permutation vs Combination", path: "/probability/counting-methods" },
        { title: "Random Variables", path: "/probability/random-variables" },
        { title: "Expected Value & Variance", path: "/probability/expected-value" },
      ]
    },
    { title: "Probability Distributions", path: "/probability-distributions", subsections: [
        { title: "Binomial & Poisson", path: "/probability-distributions/binomial-poisson" },
        { title: "Normal Distribution", path: "/probability-distributions/normal-distribution" },
        { title: "Central Limit Theorem", path: "/probability-distributions/central-limit-theorem" },
        { title: "Bayes’ Theorem", path: "/probability-distributions/bayes-theorem" },
      ]
    },
    { title: "Inferential Statistics", path: "/inferential-statistics", subsections: [
        { title: "Confidence Intervals", path: "/inferential-statistics/confidence-intervals" },
        { title: "Hypothesis Testing", path: "/inferential-statistics/hypothesis-testing" },
        { title: "T-Tests & Z-Tests", path: "/inferential-statistics/t-tests" },
        { title: "ANOVA", path: "/inferential-statistics/anova" },
      ]
    },
    { title: "Regression & Correlation", path: "/regression", subsections: [
        { title: "Linear Regression", path: "/regression/linear-regression" },
        { title: "Multiple Regression", path: "/regression/multiple-regression" },
        { title: "Chi-Square Test", path: "/regression/chi-square-test" },
      ]
    }
  ];

  return (
    <div style={{ width: "250px", padding: "10px", background: "#f8f9fa", height: "100vh", borderRight: "1px solid #ddd" }}>
      <h2>Course Units</h2>

      {/* Home Link (separate from units) */}
      <div style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ fontWeight: "bold", display: "block" }}>🏠 Home</Link>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courseUnits.map((unit, index) => (
          <li key={index}>
            {/* Only show toggle for units with subsections */}
            <div onClick={() => toggleUnit(unit.title)} style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "5px" }}>
              {unit.title} {unit.subsections ? (openUnits[unit.title] ? "▼" : "▶") : ""}
            </div>

            {openUnits[unit.title] && unit.subsections && (
              <ul style={{ paddingLeft: "15px" }}>
                {unit.subsections.map((sub, subIndex) => (
                  <div key={subIndex} className="sidebar-subsection">
                    <Link to={sub.path}>{sub.title}</Link>
                  </div>
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
