import React, { useRef } from "react";
import FooterNav from "../components/FooterNav.js";
import ReadingTime from "../components/ReadingTime.js";

const HomeContent = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Welcome to Stats 101!</h1>
      <ReadingTime contentRef={contentRef} />

      <h3>Statistics </h3>
      <p>
        Statistics is the science of <strong>collecting, organizing, analyzing, and interpreting data</strong> to make informed decisions. 
        It plays a crucial role in research, business, healthcare, economics, and countless other fields where data is used to understand patterns, 
        make predictions, and draw conclusions.
      </p>

      <FooterNav 
        prev={{ path: "/introduction", label: "← Back: Introduction" }} 
        next={{ path: "/introduction/types-of-data", label: "Next: Types of Data →" }} 
      />
    </div>
  );
};

export default HomeContent;
