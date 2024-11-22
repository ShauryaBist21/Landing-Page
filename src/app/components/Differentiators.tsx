"use client";
import React from "react";
import styles from "./Differentiators.module.css";

const Differentiators: React.FC = () => {
  const differentiators = [
    {
      title: "High Skilled Workforce",
      description: "75+ Man-years experience in Technology in various geographies",
    },
    {
      title: "Regulatory Focused Business Practice",
      description: "Data Privacy and Safety focus Process & Technical architecture",
    },
    {
      title: "Cost Leadership & Scalable Business Model",
      description: "Ethical and transparent pricing",
    },
    {
      title: "Data Driven Development",
      description: "Primary focus on data driven product development",
    },
    {
      title: "Technology & Constant Innovation",
      description: "Access to best in next technology",
    },
    {
      title: "Intellectual Property",
      description: "Access to proprietary technology & Value Chain",
    },
  ];

  return (
    <section className={styles.differentiatorsSection}>
      <h2 className={styles.title}>Our Differentiators</h2>
      <div className={styles.differentiatorGrid}>
        {differentiators.map((diff, index) => (
          <div key={index} className={styles.differentiatorCard}>
            <h3 className={styles.differentiatorTitle}>{diff.title}</h3>
            <p className={styles.differentiatorDescription}>{diff.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differentiators;
