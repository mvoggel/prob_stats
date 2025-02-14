import React, { useRef } from "react";
import FooterNav from "../../components/FooterNav.js";
import ReadingTime from "../../components/ReadingTime.js";

const Introduction = () => {
  const contentRef = useRef(null);
  
  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Introduction to Statistics and Probability</h1>
      <ReadingTime contentRef={contentRef} />

      <p>
        Welcome to the **Statistics and Probability Course**! In this course, you'll explore the essential principles 
        of statistics and probability, two fundamental areas of mathematics that play a crucial role in 
        decision-making, data analysis, and scientific research.
      </p>

      <p>
        Whether you're a student, a professional, or someone interested in data-driven insights, this course 
        will help you build a solid foundation. We’ll start with the basics—understanding **what statistics is, 
        how probability works, and why they are important**. Then, we’ll gradually move into deeper topics, such 
        as **descriptive and inferential statistics, hypothesis testing, and regression analysis**.
      </p>

      <h2>📊 Why Study Statistics?</h2>

      <p>
        In today’s world, data is everywhere—from business decisions and financial markets to healthcare and 
        scientific research. **Statistics helps us make sense of this data.** With statistical methods, we can 
        summarize large datasets, identify patterns, and draw conclusions that lead to informed decisions.
      </p>

      <h3>📈 Example 1: Business & Marketing Analytics</h3>
      <p>
        Imagine a company launching a new product. By analyzing past sales data and customer preferences, 
        they can **predict demand, optimize pricing, and tailor their marketing strategy**. Companies like 
        Amazon and Netflix use statistics to personalize recommendations, ensuring users see content or 
        products that match their interests.
      </p>

      <h3>🏥 Example 2: Medical Research & Healthcare</h3>
      <p>
        In the healthcare industry, statistical models help identify trends in disease outbreaks, improve patient outcomes, 
        and assess the effectiveness of treatments. For example, during a clinical trial, researchers use **inferential 
        statistics** to determine whether a new drug is effective by analyzing data from a sample of patients before 
        applying conclusions to the general population.
      </p>

      <h2>🎲 The Role of Probability</h2>

      <p>
        Probability is the **mathematical study of uncertainty**. Every day, we deal with uncertain situations—
        from predicting the weather to making financial investments. Probability allows us to **quantify 
        uncertainty and assess the likelihood of events happening**.
      </p>

      <h3>🌦️ Example 3: Weather Forecasting</h3>
      <p>
        When you hear that there’s a **70% chance of rain tomorrow**, that’s probability in action. Meteorologists 
        use probability models based on historical weather data, atmospheric conditions, and satellite imagery 
        to make predictions about future weather.
      </p>

      <h3>📉 Example 4: Stock Market & Risk Management</h3>
      <p>
        Investors and financial analysts rely on probability models to **assess market risks**. For example, 
        a **Monte Carlo simulation** (a probability-based model) is often used to estimate future stock prices 
        by running thousands of possible scenarios and determining the likelihood of various outcomes.
      </p>

      <h3>🎰 Example 5: Gambling & Casinos</h3>
      <p>
        Casinos and online betting companies heavily rely on probability theory to design **fair but profitable** 
        games. Every casino game, from roulette to poker, is structured using probability so that over time, 
        the house always has a mathematical edge.
      </p>

      <h2>📚 Course Overview</h2>

      <p>
        This course is structured into six core units:
      </p>

      <ul>
        <li><strong>Unit 1:</strong> Introduction to Statistics & Data Types</li>
        <li><strong>Unit 2:</strong> Descriptive Statistics & Data Summary</li>
        <li><strong>Unit 3:</strong> Probability & Random Variables</li>
        <li><strong>Unit 4:</strong> Probability Distributions & Bayes’ Theorem</li>
        <li><strong>Unit 5:</strong> Inferential Statistics & Hypothesis Testing</li>
        <li><strong>Unit 6:</strong> Correlation, Regression & Predictive Modeling</li>
      </ul>

      <p>
        Each unit builds upon the last, introducing key concepts **step by step**. Along the way, you’ll encounter 
        **real-world examples, visual aids, and practice exercises** to reinforce your understanding.
      </p>

      <h3>🚀 Example 6: Sports Analytics</h3>
      <p>
        Professional sports teams use **statistical analysis** to evaluate player performance and strategize 
        game plans. In basketball, for example, analysts use probability to calculate **shot efficiency**, 
        determining which players are most likely to score from specific locations on the court. This method, 
        called **"expected points per shot"**, has transformed modern sports strategies.
      </p>

      <h2>🔑 Key Takeaways</h2>

      <ul>
        <li><strong>Statistics helps us make sense of data.</strong> It allows us to summarize, analyze, and make informed decisions.</li>
        <li><strong>Probability measures uncertainty.</strong> It plays a vital role in risk management, forecasting, and decision-making.</li>
        <li><strong>Data is everywhere.</strong> Understanding statistics and probability is essential in almost every industry.</li>
        <li><strong>Real-world applications:</strong> Business, healthcare, finance, gambling, weather forecasting, and even sports analytics.</li>
        <li><strong>This course will guide you step by step.</strong> We’ll explore descriptive statistics, probability models, hypothesis testing, and predictive modeling.</li>
      </ul>

      <h2>🚀 Getting Started</h2>

      <p>
        Now that you have an overview, let’s dive into **What is Statistics?** In the next section, we’ll define 
        statistics, discuss its major branches, and explore its real-world applications. Click below to continue!
      </p>

      <FooterNav 
        next={{ path: "/introduction/what-is-statistics", label: "Next: What is Statistics →" }} 
      />
    </div>
  );
};

export default Introduction;
