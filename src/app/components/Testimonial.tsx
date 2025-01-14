import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <h3 className={styles.testimonialTitle}>TESTIMONIALS</h3>
      <h1 className={styles.testimonialHeading}>Let's Read User Reviews</h1>
      <p className={styles.testimonialSubheading}>Your opinion is very important to us!</p>
      
      <div className={styles.reviewContainer}>
        <div className={styles.reviewCard}>
          <div className={styles.profilePic}></div>
          <h2 className={styles.userName}>Rahul Singh</h2>
          <p className={styles.userTitle}>Freelancer</p>
          <p className={styles.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className={styles.reviewCard}>
          <div className={styles.profilePic + ' ' + styles.secondPic}></div>
          <h2 className={styles.userName}>John Doe</h2>
          <p className={styles.userTitle}>Developer</p>
          <p className={styles.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <p className={styles.scrollText}>Drag to scroll & view more</p>
    </div>
  );
};

export default Testimonial;
