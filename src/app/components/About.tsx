import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div id='aboutus'> 
      <section className={styles.aboutSection}>
        <h2 className={styles.title}>About Zenoheal</h2>
        <p className={styles.description}>
          Our mission is to enable the digital transformation of the Healthcare & Education industry by democratizing access to advanced AI technologies.
        </p>
      </section>
    </div>
  );  
};

export default About;
