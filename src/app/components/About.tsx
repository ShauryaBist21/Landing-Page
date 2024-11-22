import styles from './About.module.css';

const About= () => {
  return (
    <div id='aboutus'> 
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>About Zenoheal</h2>
      <p className={styles.description}>
        Our mission is to democratize access to advanced GAI technologies, making them accessible and beneficial for Healthcare, Education, Retail, & Digital Marketing across Asia.
      </p>
    </section>
    </div>
  );  
};

export default About;