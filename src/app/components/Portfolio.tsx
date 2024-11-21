"use client"; // This marks the component as a client-side component

import React, { useState } from "react";
import styles from "./Portfolio.module.css";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("healthcare");

  const renderContent = () => {
    switch (activeTab) {
      case "healthcare":
        return (
          <div className={`${styles.sectionContent} ${styles.active}`}>
            <h2 className={styles.sectionHeading}>ZenoTics™</h2>
            <p className={styles.description}>
              GAI based Predictive Analytics
              <br />
              Predicting patient readmissions by analyzing historical patient data, clinical records, and treatment outcomes.
            </p>
          </div>
        );
      case "education":
        return (
          <div className={`${styles.sectionContent} ${styles.active}`}>
            <h2 className={styles.sectionHeading}>ZenoED™</h2>
            <p className={styles.description}>
              AI-Powered Online Learning Platform
              <br />
              Featuring Adaptive Learning Systems, Intelligent Tutoring Systems, and Content Creation and Curation tools.
            </p>
          </div>
        );
      case "retail":
        return (
          <div className={`${styles.sectionContent} ${styles.active}`}>
            <h2 className={styles.sectionHeading}>ZenoSCM™</h2>
            <p className={styles.description}>
              GAI based Smart SCM Platform
              <br />
              Generative AI based smart tools for demand forecasting, inventory management, logistics, and procurement.
            </p>
            <h2 className={styles.sectionHeading}>Zenotail™</h2>
            <p className={styles.description}>
              AI-Powered Retail Analytics
              <br />
              Customer Behavior Analytics, Visual Search, Product Recommendations, and AI-Powered Chatbots for enhanced retail operations.
            </p>
          </div>
        );
      case "digitalMarketing":
        return (
          <div className={`${styles.sectionContent} ${styles.active}`}>
            <h2 className={styles.sectionHeading}>Zenotail™</h2>
            <p className={styles.description}>
              AI-Powered Retail Analytics
              <br />
              Customer Behavior Analytics, Visual Search, Product Recommendations, and AI-Powered Chatbots for enhanced retail operations.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.portfolioSection}>
      <h1 className={styles.mainHeading}>Our Product Portfolio</h1>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${activeTab === "healthcare" ? styles.active : ""}`}
          onClick={() => setActiveTab("healthcare")}
        >
          Healthcare
        </div>
        <div
          className={`${styles.tab} ${activeTab === "education" ? styles.active : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </div>
        <div
          className={`${styles.tab} ${activeTab === "retail" ? styles.active : ""}`}
          onClick={() => setActiveTab("retail")}
        >
          Retail
        </div>
        <div
          className={`${styles.tab} ${activeTab === "digitalMarketing" ? styles.active : ""}`}
          onClick={() => setActiveTab("digitalMarketing")}
        >
          Digital Marketing
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Portfolio;
