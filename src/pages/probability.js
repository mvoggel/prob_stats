import React from "react";
import ChartComponent from "../components/ChartComponent";

function Probability() {
  return (
    <div>
      <h1>Probability Theory</h1>
      <p>Probability measures the likelihood of an event occurring.</p>
      
      <ChartComponent
        title="Basic Probability Distribution"
        labels={["Event A", "Event B", "Event C", "Event D"]}
        data={[0.2, 0.3, 0.1, 0.4]}
      />
    </div>
  );
}

export default Probability;
