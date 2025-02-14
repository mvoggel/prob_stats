import React, { useRef } from "react";
import FooterNav from "../../components/FooterNav.js";
import ReadingTime from "../../components/ReadingTime.js";

const MeasurementScales = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Measurement Scales</h1>
      <ReadingTime contentRef={contentRef} />

      <h3>Statistics </h3>
      <p>
        Statistics is the science of <strong>collecting, organizing, analyzing, and interpreting data</strong> to make informed decisions. 
        It plays a crucial role in research, business, healthcare, economics, and countless other fields where data is used to understand patterns, 
        make predictions, and draw conclusions.
      </p>
      <p>
        At its core, <strong>statistics helps us make sense of uncertainty and variation</strong>. Data is rarely perfect or complete, and 
        statistical methods allow us to extract meaningful insights despite randomness and imperfections in measurement. There are two main 
        facets of statistics, Descriptive and Inferential Statistics, which we will cover in this course. 
      </p>

      <h4>Descriptive vs. Inferential Statistics</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ width: "50%", padding: "10px", border: "1px solid #ddd" }}>Descriptive Statistics</th>
            <th style={{ width: "50%", padding: "10px", border: "1px solid #ddd" }}>Inferential Statistics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Summarizes and visualizes data</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Makes predictions based on sample data</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Mean, Median, Mode (Central Tendency)</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Hypothesis Testing</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Standard Deviation, Variance (Measures of Spread)</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Confidence Intervals</td>
          </tr>
        </tbody>
      </table>

      <h3>Probability </h3>
      <p>
        Probability is the branch of mathematics that quantifies <strong>uncertainty and randomness</strong>. 
        It measures the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain). 
        Probability plays a fundamental role in statistics, helping us make predictions about future outcomes based on past data.
      </p>

      <p>
        In real life, probability helps us answer questions like:  
        <em>"What are the chances of rain tomorrow?"</em>  
        <em>"How likely is it to win the lottery?"</em>  
        <em>"What’s the probability of getting heads when flipping a coin?"</em>  
      </p>

      <p>
        These probabilities are calculated using <strong>mathematical rules</strong> and models that help quantify uncertainty.
      </p>

      <p>
        For example, one probability formula you may encounter later in this course is **Bayes’ Theorem**, which helps us update probabilities based on new information:
      </p>

      <p style={{ fontSize: "18px", backgroundColor: "#f4f4f4", padding: "10px", borderLeft: "5px solid #0077cc" }}>
        P(A | B) = (P(B | A) * P(A)) / P(B)
      </p>

      <p>
        This formula helps calculate the probability of event A occurring given that event B has already happened. 
        It's widely used in medical testing, spam detection, and even machine learning!
      </p>

      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

      <h2>Key Takeaways and Resources:</h2>
      <ul>
        <li><strong>Statistics is a branch of applied mathematics</strong> that helps us gather and analyze data.</li>
        <li><strong>Probability measures uncertainty</strong> and ranges from 0 (impossible) to 1 (certain).</li>
        <li><strong>Two major branches of statistics:</strong>
          <ul>
            <li><strong>Descriptive Statistics</strong> – Summarizing and visualizing data (e.g., averages, charts, graphs).</li>
            <li><strong>Inferential Statistics</strong> – Making predictions or generalizations from a sample to a larger population.</li>
          </ul>
        </li>
        <li><strong>Probability plays a key role in statistics</strong>, helping quantify uncertainty and variation.</li>
      </ul>

      <p>Below is an example of how data can be visualized:</p>
      <img src="/images/statistics-example.png" alt="Statistics Example" style={{ width: "100%" }} />

      <FooterNav 
        prev={{ path: "/introduction", label: "← Back: Introduction" }} 
        next={{ path: "/introduction/types-of-data", label: "Next: Types of Data →" }} 
      />
    </div>
  );
};

export default MeasurementScales;
