# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**Project: Interactive Statistics & Probability Tool**

### **Overview**
This project is a web-based **Statistics & Probability Explorer**, designed to help users understand key statistical concepts through visualizations, explanations, and interactive elements. The tool will be mostly **static** (prebuilt components) rather than dynamically processing user data, making it easier to develop and deploy within a couple of weeks. The long-term vision is for this to serve as the foundation for a **college-level statistics course**.

### **Goals & Purpose**
- Showcase knowledge in **statistics, probability, and Bayesian statistics**.
- Serve as an **educational tool** that could be sold or used as a curriculum component.
- Keep complexity manageable by focusing on **static but informative** content.

### **Tech Stack**
- **Frontend:** React (for UI development)
- **Backend:** Flask (Python for data processing and API)
- **Data Processing & Visualization:** Python (Flask API for precomputed stats), D3.js or Chart.js for graphs
- **Hosting & Deployment:** GitHub & GitHub Pages (for frontend), Render/Heroku (for Flask backend)

### **Core Features**
#### **1. Probability Distributions**
- Static visualizations for:
  - Normal Distribution
  - Binomial Distribution
  - Poisson Distribution
- Explanations of parameters (mean, standard deviation, etc.)

#### **2. Statistical Concepts**
- **Central Limit Theorem:** Precomputed visualization of how sample sizes affect distributions.
- **Law of Large Numbers:** Static example showing averages converging to expected values.
- **Hypothesis Testing:** Step-by-step breakdown of t-tests and p-values.
- **Regression Analysis:** Example dataset showcasing linear regression.

#### **3. Bayesian Statistics**
- Introduction to **Bayesian Inference**.
- **Bayes’ Theorem:** Explanation and real-world applications.
- **Prior, Likelihood, and Posterior Distributions**.
- **Bayesian vs. Frequentist Statistics**.

#### **4. Case Studies & Real-World Examples**
- Preloaded datasets with insights (e.g., sports stats, finance, demographics).
- Guided analysis showing how statistics and Bayesian methods apply in various fields.

#### **5. Downloadable Resources**
- PDFs of explanations and sample exercises.
- Code snippets for running statistical and Bayesian tests in Python.

### **Development Roadmap (2 Weeks)**
1. **Week 1:**
   - Set up the project repo and base UI layout in **React**.
   - Build **static pages** for each statistical concept.
   - Create precomputed **charts & graphs** using Python & JavaScript.

2. **Week 2:**
   - Implement **Flask API** for data retrieval and calculations.
   - Finalize all case studies & dataset examples.
   - Polish UI and add interactive elements (sliders, hover effects, tooltips).
   - Test deployment on **GitHub Pages (frontend) & Render/Heroku (backend)**.
   
### **Future Enhancements (Post-Launch Ideas)**
- Add **interactive quizzes**.
- Enable **CSV uploads** for user-driven analysis.
- Expand Bayesian models with **Markov Chain Monte Carlo (MCMC)**.

