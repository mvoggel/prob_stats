import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

/* Import Parent Pages */
import Introduction from "./content/Introduction";
import DescriptiveStatistics from "./content/DescriptiveStatistics";
import Probability from "./content/Probability";
import ProbabilityDistributions from "./content/ProbabilityDistributions";
import InferentialStatistics from "./content/InferentialStatistics";
import Regression from "./content/Regression";

/* Import Child Pages */
import WhatIsStatistics from "./content/WhatIsStatistics";
import TypesOfData from "./content/TypesOfData";
import MeasurementScales from "./content/MeasurementScales";
import BasicProbability from "./content/BasicProbability";
import SetOperations from "./content/SetOperations";
import BayesTheorem from "./content/BayesTheorem";
import HypothesisTesting from "./content/HypothesisTesting";
import LinearRegression from "./content/LinearRegression";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            {/* Parent Pages */}
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/descriptive-statistics" element={<DescriptiveStatistics />} />
            <Route path="/probability" element={<Probability />} />
            <Route path="/probability-distributions" element={<ProbabilityDistributions />} />
            <Route path="/inferential-statistics" element={<InferentialStatistics />} />
            <Route path="/regression" element={<Regression />} />

            {/* Child Pages - Nested Topics */}
            <Route path="/introduction/what-is-statistics" element={<WhatIsStatistics />} />
            <Route path="/introduction/types-of-data" element={<TypesOfData />} />
            <Route path="/introduction/measurement-scales" element={<MeasurementScales />} />
            <Route path="/probability/basic-probability" element={<BasicProbability />} />
            <Route path="/probability/set-operations" element={<SetOperations />} />
            <Route path="/probability-distributions/bayes-theorem" element={<BayesTheorem />} />
            <Route path="/inferential-statistics/hypothesis-testing" element={<HypothesisTesting />} />
            <Route path="/regression/linear-regression" element={<LinearRegression />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
