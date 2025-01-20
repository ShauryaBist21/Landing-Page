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

   

    

      
      
    </div>
  );
};

export default Frame;
