import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Probability from "./pages/Probability";
import Statistics from "./pages/Statistics";
import Bayesian from "./pages/Bayesian";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/probability" element={<Probability />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/bayesian" element={<Bayesian />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
