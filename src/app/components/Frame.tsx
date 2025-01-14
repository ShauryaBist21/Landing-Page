import React from 'react';
import styles from './Frame.module.css';


const Frame = () => {
  return (
    <div className={styles.frameContainer}>
      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutImageContainer}>
          <img 
            src="/0dadda15819562ae90af3be3b9daefba.png" 
            alt="Zenoheal Image" 
            className={styles.aboutImage} 
          />
        </div>
        <div className={styles.aboutTextContainer}>
          <h2 className={styles.aboutTitle}>About Us</h2>
          <h1 className={styles.aboutHeading}>
            Zenoheal: Transforming businesses with Generative AI-as-a-Service.
          </h1>
          <p className={styles.aboutText}>
            Zenoheal: Revolutionizing businesses with advanced AI. From intelligent, predictive asset monitoring to driving digital innovation, we empower industries to harness AI for a competitive edge and scalable growth.
          </p>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.sectionSpacing}>
        <h2 className={styles.sectionTitle}>Our AI Services</h2>
        <p className={styles.aboutText}>Redefine the way you do business with Zenoheal Solutions</p>
        <div className={styles.servicesContainer}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🧠</div>
            <h3 className={styles.cardTitle}>Digital Transformation</h3>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>💼</div>
            <h3 className={styles.cardTitle}>Enterprise Solutions</h3>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📈</div>
            <h3 className={styles.cardTitle}>Digital Marketing</h3>
          </div>
        </div>
        <button className={styles.learnMoreButton}>Learn More</button>
      </section>

      {/* Product Portfolio Section */}
      <section className={styles.sectionSpacing}>
        <h2 className={styles.sectionTitle}>Our Product Portfolio</h2>
        <p className={styles.aboutText}>Redefine the way you do business with Zenoheal Solutions</p>
        <div className={styles.portfolioContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Healthcare Product Name</h3>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Education Product Name</h3>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Retail Product Name</h3>
          </div>
        </div>
        <button className={styles.learnMoreButton}>Learn More</button>
      </section>

      {/* Differentiators Section */}
      <section className={styles.sectionSpacing}>
        <h2 className={styles.sectionTitle}>Our Differentiators</h2>
        <div className={styles.differentiatorsContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>High Skilled Workforce</h3>
            <p className={styles.cardSubtitle}>
              75+ Man-years experience in Technology in various geographies
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Intellectual Property</h3>
            <p className={styles.cardSubtitle}>
              Access to proprietary technology & Value Chain
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Data Driven Development</h3>
            <p className={styles.cardSubtitle}>
              75+ Man-years experience in Technology in various geographies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
