import React from "react";
import styles from "./references.module.css";

const Reference: React.FC = () => {
  return (
    <div className={styles.reference}>
      <div className={styles.container}>
        <h1 className={styles.title}>Let's Connect to Co-Create Value</h1>
        <div className={styles.subheading}>
          <h2>A Bayantiz Technologies AI Venture</h2>
          <p>715 Duong so 9, Phuong Thao Dien, Thanh pho Thu Duc</p>
          <p>HCMC, Vietnam</p>
          <p>Email: <a href="mailto:business@zenoheal.com">business@zenoheal.com</a></p>
        </div>
        <div className={styles.buttonContainer}>
          <a href="mailto:business@zenoheal.com" className={styles.contactUsButton}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reference;
