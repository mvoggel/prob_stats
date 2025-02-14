import React, { useRef } from "react";
import FooterNav from "../../components/FooterNav.js";
import ReadingTime from "../../components/ReadingTime.js";

const MeasurementScales = () => {
  const contentRef = useRef(null);
  
  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Understanding Measurement Scales</h1>
      <ReadingTime contentRef={contentRef} />

      <p>
        In statistics, the **way we measure and categorize data** affects the types of analysis we can perform. 
        Measurement scales determine how data is classified, compared, and used in calculations. Understanding these scales 
        ensures we use the **correct statistical techniques** when analyzing data.
      </p>

      <h2>📊 The Four Measurement Scales</h2>
      <p>
        The four types of measurement scales are:
      </p>
      <ul>
        <li><strong>Nominal Scale:</strong> Categories with no meaningful order.</li>
        <li><strong>Ordinal Scale:</strong> Categories with a meaningful order but unequal differences.</li>
        <li><strong>Interval Scale:</strong> Numerical values with equal intervals but no true zero.</li>
        <li><strong>Ratio Scale:</strong> Numerical values with equal intervals and a true zero.</li>
      </ul>

      <hr />

      <h2>📌 **1. Nominal Scale: Labels Without Order**</h2>
      <p>
        The **nominal scale** categorizes data into groups, but the categories have **no logical order or ranking**.
      </p>

      <h3>🎨 **Example: Favorite Colors**</h3>
      <p>
        If a survey asks respondents for their **favorite color** (Red, Blue, Green, Yellow), the responses are simply categories. 
        One color is not "higher" or "better" than another.
      </p>

      <h3>🏀 **Example: Sports Teams**</h3>
      <p>
        If a dataset records people's **favorite sports teams**, such as "Lakers," "Yankees," or "Patriots," these are just names without numerical value.
      </p>

      <p><strong>Key Features of Nominal Data:</strong></p>
      <ul>
        <li>Categories with **no inherent ranking**.</li>
        <li>Used for **grouping** rather than numerical calculations.</li>
        <li>Common analysis methods: **Mode (most frequent category)**, frequency counts, and bar charts.</li>
      </ul>

      <hr />

      <h2>📌 **2. Ordinal Scale: Ordered Categories**</h2>
      <p>
        The **ordinal scale** categorizes data with a **meaningful order**, but the differences between categories **aren’t uniform**.
      </p>

      <h3>⭐ **Example: Customer Satisfaction Ratings**</h3>
      <p>
        A survey may ask customers to rate their satisfaction as:
        <ul>
          <li>1 - Very Dissatisfied</li>
          <li>2 - Dissatisfied</li>
          <li>3 - Neutral</li>
          <li>4 - Satisfied</li>
          <li>5 - Very Satisfied</li>
        </ul>
        While we can say that "5" is better than "3," we **don’t know if the difference between "2" and "3" is the same as between "4" and "5."**
      </p>

      <h3>🏥 **Example: Pain Scale in Medicine**</h3>
      <p>
        Doctors often ask patients to rate their pain **on a scale of 1 to 10**. While the numbers indicate severity, we can’t say 
        the jump from 3 to 4 is equal to the jump from 7 to 8.
      </p>

      <p><strong>Key Features of Ordinal Data:</strong></p>
      <ul>
        <li>**Ranked categories**, but differences between ranks may not be equal.</li>
        <li>Mathematical operations are **limited to ranking comparisons**.</li>
        <li>Common analysis: **Median**, **percentiles**, and non-parametric tests.</li>
      </ul>

      <hr />

      <h2>📌 **3. Interval Scale: Numerical, Equal Intervals, No True Zero**</h2>
      <p>
        The **interval scale** is numerical, meaning the **differences between values are meaningful**, but **zero is arbitrary**.
      </p>

      <h3>🌡️ **Example: Temperature in Celsius or Fahrenheit**</h3>
      <p>
        The difference between **20°C and 30°C** is the same as **30°C to 40°C** (equal intervals). However, **0°C does not mean no temperature**—it’s just a point on the scale.
      </p>

      <h3>🧠 **Example: IQ Scores**</h3>
      <p>
        If a person has an **IQ of 120**, they are 20 points higher than someone with an **IQ of 100**. However, an IQ of **0 does not mean no intelligence**.
      </p>

      <p><strong>Key Features of Interval Data:</strong></p>
      <ul>
        <li>Numbers have **equal spacing**, so differences are meaningful.</li>
        <li>No true zero (zero does not indicate absence).</li>
        <li>Common analysis: **Mean, standard deviation, correlation analysis**.</li>
      </ul>

      <hr />

      <h2>📌 **4. Ratio Scale: Numerical, Equal Intervals, True Zero**</h2>
      <p>
        The **ratio scale** is like the interval scale, but with a **true zero**, meaning "nothing" exists at zero.
      </p>

      <h3>🏃 **Example: Running Speed**</h3>
      <p>
        A runner moving at **0 meters per second** is **not moving at all**. A runner moving at **8 m/s is twice as fast** as one moving at **4 m/s**.
      </p>

      <h3>💰 **Example: Income Levels**</h3>
      <p>
        If someone earns **$0**, they have **no income**. Similarly, if a bag of rice weighs **0 kilograms**, it means the object does not exist.
      </p>

      <p><strong>Key Features of Ratio Data:</strong></p>
      <ul>
        <li>Equal intervals, like interval data.</li>
        <li>Has a **true zero**, so ratios make sense (e.g., 10 is twice as much as 5).</li>
        <li>All mathematical operations are possible: **addition, subtraction, multiplication, division**.</li>
      </ul>

      <hr />

      <h2>📊 Summary Table: Measurement Scales</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Scale Type</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Definition</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Nominal</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Categories without ranking</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Gender, Blood Type, Nationality</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Ordinal</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Ordered categories</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Education Level, Pain Scale</td>
          </tr>
        </tbody>
      </table>

      <FooterNav 
        prev={{ path: "/introduction/types-of-data", label: "← Back: Types of Data" }} 
        next={{ path: "/introduction/populations-vs-samples", label: "Next: Populations vs Samples →" }} 
      />
    </div>
  );
};

export default MeasurementScales;
