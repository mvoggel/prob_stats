import React from "react";
import { Link } from "react-router-dom";

const FooterNav = ({ prev, next }) => {
  return (
    <div style={{ 
      position: "sticky", 
      bottom: "0", 
      width: "100%", 
      background: "#f8f9fa", 
      padding: "15px", 
      borderTop: "1px solid #ddd", 
      display: "flex", 
      justifyContent: "space-between"
    }}>
      {prev ? <Link to={prev.path} style={{ padding: "10px", fontSize: "16px" }}>⬅ {prev.label}</Link> : <div />}
      {next ? <Link to={next.path} style={{ padding: "10px", fontSize: "16px" }}>{next.label} ➡</Link> : <div />}
    </div>
  );
};

export default FooterNav;
