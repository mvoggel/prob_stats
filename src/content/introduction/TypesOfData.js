import React, { useRef } from "react";
import FooterNav from "../../components/FooterNav.js";
import ReadingTime from "../../components/ReadingTime.js";

const TypesOfData = () => {
  const contentRef = useRef(null);
  
  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Types of Data in Statistics</h1>
      <ReadingTime contentRef={contentRef} />

      <p>
        Data is the foundation of **statistics, analytics, and decision-making**. But not all data is the same! Understanding the **different types of data** is essential because different types require different analytical methods. In this lesson, we’ll explore **four major types of data** and see how they apply to real-world scenarios.
      </p>

      <h2>🔢 **The Four Types of Data**</h2>
      <p>
        Data in statistics is classified into **four levels of measurement**:
      </p>
      
      <ul>
        <li><strong>Nominal Data:</strong> Categorical, without any meaningful order.</li>
        <li><strong>Ordinal Data:</strong> Categorical, but with a meaningful ranking.</li>
        <li><strong>Interval Data:</strong> Numerical, with equal intervals but no true zero.</li>
        <li><strong>Ratio Data:</strong> Numerical, with equal intervals and a true zero.</li>
      </ul>

      <hr />

      <h2>📌 **1. Nominal Data: Categorical Without Order**</h2>
      <p>
        Nominal data represents **categories or labels**, but the order of the categories doesn’t matter.
      </p>

      <h3>🏀 **Example: Sports Teams**</h3>
      <p>
        If we collect data on people's favorite sports teams (e.g., Lakers, Yankees, Cowboys, Patriots), these **categories have no ranked order**—they're just names!
      </p>

      <h3>👥 **Example: Customer Demographics**</h3>
      <p>
        A survey may ask for **gender (Male, Female, Non-binary, Prefer not to say)** or **marital status (Single, Married, Divorced)**. These are **labels** with no inherent ranking.
      </p>

      <p><strong>Key Features of Nominal Data:</strong></p>
      <ul>
        <li>Data is **grouped into categories**.</li>
        <li>No mathematical operations (e.g., addition, subtraction) are possible.</li>
        <li>Analysis uses **mode** (most frequent category) and **frequency counts**.</li>
      </ul>

      <hr />

      <h2>📌 **2. Ordinal Data: Categorical With Meaningful Order**</h2>
      <p>
        Ordinal data has categories **with a meaningful ranking**, but the differences between categories aren’t necessarily uniform.
      </p>

      <h3>⭐ **Example: Customer Satisfaction Ratings**</h3>
      <p>
        If a survey asks customers to rate satisfaction as **(Very Unsatisfied, Unsatisfied, Neutral, Satisfied, Very Satisfied)**, there's a clear **order**, but we can’t say the difference between "Satisfied" and "Very Satisfied" is exactly the same as between "Neutral" and "Satisfied."
      </p>

      <h3>🏥 **Example: Pain Scale in Medicine**</h3>
      <p>
        A doctor may ask a patient, **"On a scale of 1 to 10, how bad is your pain?"** The numbers provide a ranking, but the difference between a 3 and a 4 may not feel the same as between a 7 and an 8.
      </p>

      <p><strong>Key Features of Ordinal Data:</strong></p>
      <ul>
        <li>Data **has a meaningful order**, but the intervals between values aren’t uniform.</li>
        <li>Mathematical operations are **limited** (e.g., you can compare greater/lesser but not add values).</li>
        <li>Common analysis methods: **Median**, **percentiles**, and **rank-based comparisons**.</li>
      </ul>

      <hr />

      <h2>📌 **3. Interval Data: Numerical, Equal Intervals, No True Zero**</h2>
      <p>
        Interval data is **numerical data where the difference between values is meaningful, but there is no "true zero."**
      </p>

      <h3>🌡️ **Example: Temperature in Celsius or Fahrenheit**</h3>
      <p>
        A temperature of **30°C is 10° higher than 20°C**, and the difference between **20°C and 30°C is the same as between 10°C and 20°C**. However, **0°C does not mean "no temperature"**—it’s just a point on the scale.
      </p>

      <h3>⏳ **Example: IQ Scores**</h3>
      <p>
        If a person has an **IQ of 120**, they are 20 points above someone with an **IQ of 100**. However, an IQ of **0 does not mean no intelligence**—the scale is arbitrary.
      </p>

      <p><strong>Key Features of Interval Data:</strong></p>
      <ul>
        <li>Numbers have **equal spacing**, so differences are meaningful.</li>
        <li>There is **no absolute zero** (0 does not mean "nothing").</li>
        <li>Common analysis: **Mean, standard deviation, correlation**.</li>
      </ul>

      <hr />

      <h2>📌 **4. Ratio Data: Numerical, Equal Intervals, True Zero**</h2>
      <p>
        Ratio data is like interval data, but with a **true zero**, meaning "nothing" truly exists at zero.
      </p>

      <h3>🏃 **Example: Distance & Speed**</h3>
      <p>
        A person running **0 meters per second** means **no movement**. A car moving at **60 mph is going twice as fast** as one moving at **30 mph**.
      </p>

      <h3>💰 **Example: Income & Weight**</h3>
      <p>
        If someone earns **$0**, they have **no income**. Similarly, if an object weighs **0 grams**, it means the object does not exist physically.
      </p>

      <p><strong>Key Features of Ratio Data:</strong></p>
      <ul>
        <li>Has **equal intervals** (same as interval data).</li>
        <li>Includes a **true zero**, allowing for **ratios and proportions** (e.g., 20 is twice as much as 10).</li>
        <li>All mathematical operations are possible: **addition, subtraction, multiplication, division**.</li>
      </ul>

      <hr />

      <h2>🔍 **Summary Table: Types of Data**</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type of Data</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Characteristics</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Nominal</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Categories without order</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Gender, Eye Color, Blood Type</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Ordinal</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Ordered categories</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Pain Scale, Education Level</td>
          </tr>
        </tbody>
      </table>

      <FooterNav 
        prev={{ path: "/introduction/what-is-statistics", label: "← Back: What is Statistics" }} 
        next={{ path: "/descriptive-statistics", label: "Next: Descriptive Statistics →" }} 
      />
    </div>
  );
};

export default TypesOfData;
