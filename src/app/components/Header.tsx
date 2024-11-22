import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>AI Excellence, Delivered</h1>
        <p className={styles.description}>
          Welcome to Zenoheal, a Bayantiz Technologies AIaaS venture, dedicated to revolutionizing the way businesses leverage artificial intelligence.
        </p>
        <div className={styles.buttonContainer}>
          <a href="#" className={styles.learnMoreButton}>Learn More</a>
          <a href="#" className={styles.contactUsButton}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;