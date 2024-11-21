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
              <img
                alt={`Technology ${index + 1}`}
                src="/placeholder.svg?height=80&width=80"
                width={80}
                height={80}
                className={styles.technologyImage}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Technology;
