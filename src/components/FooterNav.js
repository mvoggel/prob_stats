import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const FooterNav = ({ prev, next }) => {
  return (
    <div className="footer-nav">
      {/* Back Button */}
      {prev ? (
        <Link to={prev.path} className="footer-link">{prev.label}</Link>
      ) : <div></div>} {/* Empty div to keep alignment */}

      {/* Next Button */}
      {next && (
        <Link to={next.path} className="footer-link">{next.label}</Link>
      )}
    </div>
  );
};

export default FooterNav;
