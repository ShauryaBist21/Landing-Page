// components/Footer.tsx
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        © 2024 Zenoheal. All rights reserved.
      </div>
      <div className={styles.right}>
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
