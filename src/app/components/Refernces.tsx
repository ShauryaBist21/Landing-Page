"use client";
import React from "react";
import styles from "./Refernces.module.css";

const Reference: React.FC = () => {
  return (
    <div className={styles.Reference}>
      <div className={styles.container}>
        <h1 className={styles.title}>Let&apos;s Connect to Co-Create Value</h1>
        <div className={styles.subheading}>
          <h2>A Bayantiz Technologies AI Venture</h2>
          <p>715 Duong so 9, Phuong Thao Dien, Thanh pho Thu Duc</p>
          <p>HCMC, Vietnam</p>
          <p>
            Email:{" "}
            <a
              href="mailto:business@zenoheal.com"
              aria-label="Email business at zenoheal"
            >
              business@zenoheal.com
            </a>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:business@zenoheal.com"
            className={styles.contactUsButton}
            aria-label="Contact us via email"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reference;
