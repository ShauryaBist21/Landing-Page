import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>AI Excellence, Delivered</h1>
        <p className={styles.description}>
          Welcome to Zenoheal, a pioneering Generative AI-as-a-Service (AIaaS) company transforming how businesses leverage artificial intelligence. At Zenoheal, we deliver cutting-edge AI solutions that boost operational efficiency, fuel growth, and create new opportunities across diverse industries. With a commitment to innovation and excellence, we empower organizations to harness AI's full potential for a smarter, more connected future across Healthcare, Education, Retail, and Digital Marketing.
        </p>
        <div className={styles.buttonContainer}>
          <a href="#" className={styles.learnMoreButton}>Learn More</a>
          <a href="#" className={styles.contactUsButton}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
