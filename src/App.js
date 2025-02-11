import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatIsStatistics from "./content/introduction/WhatIsStatistics.js";


/* Import Course Pages */
import Introduction from "./content/introduction/Introduction";
import DescriptiveStatistics from "./content/descriptive-statistics/DescriptiveStatistics";
import Probability from "./content/probability/Probability";
import ProbabilityDistributions from "./content/probability-distributions/ProbabilityDistributions";
import InferentialStatistics from "./content/inferential-statistics/InferentialStatistics";
import Regression from "./content/regression/Regression";

/* Import Subsections */
import DataVisualization from "./content/introduction/DataVisualization";
import CentralTendency from "./content/descriptive-statistics/CentralTendency";
import HypothesisTesting from "./content/inferential-statistics/HypothesisTesting";
import LinearRegression from "./content/regression/LinearRegression";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays on top, outside the flex container */}
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* Sidebar remains in the layout */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            {/* Parent Pages */}
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/descriptive-statistics" element={<DescriptiveStatistics />} />
            <Route path="/probability" element={<Probability />} />
            <Route path="/probability-distributions" element={<ProbabilityDistributions />} />
            <Route path="/inferential-statistics" element={<InferentialStatistics />} />
            <Route path="/regression" element={<Regression />} />

            {/* Child Pages */}
            <Route path="/introduction/data-visualization" element={<DataVisualization />} />
            <Route path="/descriptive-statistics/central-tendency" element={<CentralTendency />} />
            <Route path="/inferential-statistics/hypothesis-testing" element={<HypothesisTesting />} />
            <Route path="/regression/linear-regression" element={<LinearRegression />} />
            <Route path="/introduction/what-is-statistics" element={<WhatIsStatistics />} />

          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
