import React, { useRef } from "react";
import FooterNav from "../../components/FooterNav.js";
import ReadingTime from "../../components/ReadingTime.js";

const PopulationSamples = () => {
  const contentRef = useRef(null);

  return (
    <div ref={contentRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Populations vs. Samples</h1>
      <ReadingTime contentRef={contentRef} />

      <p>
        In statistics, data is collected from a **population** or a **sample**. Understanding the difference 
        between these two is crucial when conducting research, as it affects the accuracy and applicability of results.
      </p>

      <h2>📌 What is a Population?</h2>
      <p>
        A **population** refers to the **entire group** that we want to study or draw conclusions about. It includes 
        all individuals, objects, or data points that fit a certain criteria.
      </p>

      <h3>🌎 **Example: Census Surveys**</h3>
      <p>
        A national census collects information about **every person in a country**—this represents the **entire population**.
      </p>

      <h3>💊 **Example: All Patients with a Disease**</h3>
      <p>
        If a pharmaceutical company wants to analyze a new drug's effectiveness for **all diabetes patients worldwide**, 
        the entire **population** consists of every person with diabetes.
      </p>

      <p><strong>Key Points:</strong></p>
      <ul>
        <li>Populations are **large and difficult to study entirely**.</li>
        <li>It is often **impractical or impossible** to collect data on an entire population.</li>
      </ul>

      <hr />

      <h2>📌 What is a Sample?</h2>
      <p>
        A **sample** is a **subset of a population** used to represent the whole. Instead of collecting data from 
        every individual, researchers select a smaller, manageable group to analyze.
      </p>

      <h3>🔬 **Example: Medical Drug Trials**</h3>
      <p>
        Instead of testing a new drug on **every patient with a disease**, researchers test a **sample group** of 
        500 people to estimate the drug's effectiveness.
      </p>

      <h3>📊 **Example: Political Polling**</h3>
      <p>
        Instead of surveying an entire country about an election, a polling company surveys **1,000 randomly selected voters** 
        and uses statistical methods to predict overall results.
      </p>

      <p><strong>Key Points:</strong></p>
      <ul>
        <li>Samples are **smaller and easier to study** than entire populations.</li>
        <li>Well-chosen samples provide **accurate estimates of population characteristics**.</li>
      </ul>

      <hr />

      <h2>📊 How Do We Select a Good Sample?</h2>
      <p>
        A **good sample** should be **representative** of the population, meaning it accurately reflects the 
        characteristics of the whole group. Several methods are used to achieve this:
      </p>

      <ul>
        <li><strong>Simple Random Sampling:</strong> Every individual has an equal chance of being selected.</li>
        <li><strong>Stratified Sampling:</strong> The population is divided into subgroups, and samples are taken from each.</li>
        <li><strong>Cluster Sampling:</strong> The population is divided into clusters, and whole clusters are randomly selected.</li>
      </ul>

      <p>
        Using the right sampling method is essential to avoid **bias** and ensure that results are applicable 
        to the wider population.
      </p>

      <FooterNav 
        prev={{ path: "/introduction/measurement-scales", label: "← Back: Measurement Scales" }} 
        next={{ path: "/introduction/data-visualization", label: "Next: Data Visualization →" }} 
      />
    </div>
  );
};

export default PopulationSamples;
