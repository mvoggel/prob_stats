import React, { useEffect, useState } from "react";

const ReadingTime = ({ contentRef }) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Extract all text from the page
      const textContent = contentRef.current.innerText || "";
      const wordCount = textContent.split(/\s+/).filter(Boolean).length;
      setReadingTime(Math.ceil(wordCount / 200)); // Assuming 200 words per minute
    }
  }, [contentRef]);

  return <p style={{ fontStyle: "italic", color: "#666" }}>⏳ Estimated Reading Time: {readingTime} min</p>;
};

export default ReadingTime;
