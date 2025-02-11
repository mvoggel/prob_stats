import React from "react";

const WhatIsStatistics = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>What is Statistics?</h1>
      <p>
        Statistics is the study of data collection, organization, analysis, and interpretation.
        It allows us to make informed decisions based on numerical data.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Statistics helps in making sense of large datasets.</li>
        <li>It is used in various fields like economics, healthcare, and technology.</li>
        <li>Two major branches: <strong>Descriptive Statistics</strong> and <strong>Inferential Statistics</strong>.</li>
      </ul>

      <h2>Visual Representation</h2>
      <p>Below is an example of how data can be visualized:</p>
      <img src="/images/statistics-example.png" alt="Statistics Example" style={{ width: "100%" }} />

      <h2>Next Steps</h2>
      <p>
        Now that you understand what statistics is, let's explore the different types of data.
        Click <a href="/introduction/types-of-data">here</a> to continue.
      </p>
    </div>
  );
};

export default WhatIsStatistics;
