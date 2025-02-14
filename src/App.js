import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import FooterNav from "./components/FooterNav"; // Updated Footer for sticky behavior
import WhatIsStatistics from "./content/introduction/WhatIsStatistics.js";
import TypesOfData from "./content/introduction/TypesOfData.js";

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
      <div className="app-container">
        {/* Fixed Navbar */}
        <Navbar />

        <div className="main-layout">
          {/* Fixed Sidebar */}
          <Sidebar />

          {/* Scrollable Content */}
          <div className="content-area">
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
              <Route path="/introduction/types-of-data" element={<TypesOfData />} />
            </Routes>
          </div>
        </div>

        {/* Sticky Footer Navigation */}
        <FooterNav />
      </div>
    </Router>
  );
}

export default App;
