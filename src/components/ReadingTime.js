import React, { useEffect, useState } from "react";

const estimateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average adult reading speed
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const ReadingTime = ({ contentId }) => {
  const [readingTime, setReadingTime] = useState(1);

  useEffect(() => {
    const contentElement = document.getElementById(contentId);
    if (contentElement) {
      const text = contentElement.innerText; // Get all visible text
      setReadingTime(estimateReadingTime(text));
    }
  }, []);

  return (
    <p style={{ fontSize: "14px", color: "gray", marginBottom: "10px" }}>
      ⏳ Estimated Reading Time: {readingTime} min
    </p>
  );
};

export default ReadingTime;
