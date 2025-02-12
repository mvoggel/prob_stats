import React from "react";
import FooterNav from "../../components/FooterNav.js";


const WhatIsStatistics = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Types of Data</h1>
      <h3>Statistics </h3>
      <p>
        Statistics is the science of <strong>collecting, organizing, analyzing, and interpreting data</strong> to make informed decisions. 
        It plays a crucial role in research, business, healthcare, economics, and countless other fields where data is used to understand patterns, 
        make predictions, and draw conclusions.
      </p>
      <p>
        At its core, <strong>statistics helps us make sense of uncertainty and variation</strong>. Data is rarely perfect or complete, and 
        statistical methods allow us to extract meaningful insights despite randomness and imperfections in measurement. There are two main 
        facets of statisics, Descriptive and Inferential Statistics, which we will cover in this course. 
      </p>
      <h4>Descriptive vs. Inferential Statistics</h4>
      <br></br>
      <h3>Probability </h3>
      <p>
        Probability is the branch of mathematics that quantifies <strong>uncertainty and randomness</strong>. 
        It measures the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain). 
        Probability plays a fundamental role in statistics, helping us make predictions about future outcomes based on past data.
      </p>


    <FooterNav 
      next={{ path: "/introduction/measurement-scales", label: "Next: Measurement Scales" }} 
      prev={{ path: "/introduction/what-is-statistics", label: "Back: What is Statistics?" }} 

    />
    </div>
    
  );
};



export default WhatIsStatistics;
