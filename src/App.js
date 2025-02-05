import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import Probability from "./pages/probability.js";
import Statistics from "./pages/statistics.js";
import Bayesian from "./pages/bayesian.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/probability" element={<Probability />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/bayesian" element={<Bayesian />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
