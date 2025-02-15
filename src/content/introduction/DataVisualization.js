import React, { useRef } from "react";
import FooterNav from "../../components/FooterNav.js";
import ReadingTime from "../../components/ReadingTime.js";
import ChartComponent from "../../components/ChartComponent.js";

const DataVisualization = () => {
  const contentRef = useRef(null);

  // Sample data for the chart
  const sampleLabels = ["2015", "2016", "2017", "2018", "2019", "2020"];
  const sampleData = [50, 65, 80, 120, 110, 155];

  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Introduction to Data Visualization</h1>
      <ReadingTime contentRef={contentRef} />

      <p>
        Data visualization is the **graphical representation of information and data**. By using charts, graphs, 
        and maps, we can make complex data easier to understand and analyze.
      </p>

      <h2>📌 Why is Data Visualization Important?</h2>
      <p>
        **Raw data can be difficult to interpret**, but visualization helps by showing patterns, trends, and relationships. 
        Effective visualizations improve decision-making and communication.
      </p>

      <h3>📈 **Example: Stock Market Trends**</h3>
      <p>
        Instead of analyzing thousands of stock prices, investors use **line charts** to observe 
        how a stock's value changes over time.
      </p>

      <h3>💡 **Example: COVID-19 Case Trends**</h3>
      <p>
        Governments and health officials use **bar charts and heatmaps** to track and predict 
        infection rates across different regions.
      </p>

      <hr />

      <h2>📊 Common Types of Data Visualizations</h2>
      <ul>
        <li><strong>Bar Charts:</strong> Compare different categories.</li>
        <li><strong>Line Graphs:</strong> Show trends over time.</li>
        <li><strong>Pie Charts:</strong> Display proportions of a whole.</li>
        <li><strong>Histograms:</strong> Show frequency distributions.</li>
        <li><strong>Scatter Plots:</strong> Visualize relationships between two variables.</li>
      </ul>

      <hr />

      <h2>📉 Example Chart: Website Traffic Over Time</h2>
      <ChartComponent 
        title="Website Visitors Per Year" 
        labels={sampleLabels} 
        data={sampleData} 
      />

      <p>
        The chart above shows the growth of website visitors over the past **six years**. 
        We can observe an **upward trend**, indicating increasing popularity.
      </p>

      <h2>📌 Choosing the Right Visualization</h2>
      <p>
        Different types of data require different visualizations. The right chart depends on **what insights you 
        want to convey**. Here are some guidelines:
      </p>
      <ul>
        <li>Use **bar charts** for categorical comparisons.</li>
        <li>Use **line graphs** for continuous data trends.</li>
        <li>Use **pie charts** when showing proportions.</li>
        <li>Use **scatter plots** for correlation analysis.</li>
      </ul>

      <FooterNav 
        prev={{ path: "/introduction/populations-vs-samples", label: "← Back: Populations vs Samples" }} 
        next={{ path: "/descriptive-statistics", label: "Next: Descriptive Statistics →" }} 
      />
    </div>
  );
};

export default DataVisualization;
