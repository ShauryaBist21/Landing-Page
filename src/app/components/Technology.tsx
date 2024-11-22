"use client";
import React from "react";
import styles from "./Technology.module.css";

const Technology: React.FC = () => {
  return (
    <section className={styles.technologySection}>
      <h2 className={styles.title}>Technology Stack</h2>
      <div className={styles.technologyGrid}>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.technologyBox}>
              {/* Placeholder content */}
              <div className={styles.technologyImagePlaceholder}>
                {/* Later replace with <img> */}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Technology;
