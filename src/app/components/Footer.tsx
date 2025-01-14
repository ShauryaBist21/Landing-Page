import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <h2 className={styles.footerHeading}>Reach us</h2>
          <p className={styles.footerItem}><span className={styles.icon}>📞</span> (+1) 510-945-8169</p>
          <p className={styles.footerItem}><span className={styles.icon}>✉️</span> info@zenohealv.co</p>
          <p className={styles.footerItem}><span className={styles.icon}>📍</span> 300 S Main Street, Suite 212 Holly Springs, NC 27540</p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h2 className={styles.footerHeading}>Company</h2>
            <p className={styles.footerLink}>About</p>
            <p className={styles.footerLink}>Contact</p>
            <p className={styles.footerLink}>Blogs</p>
          </div>
          <div className={styles.column}>
            <h2 className={styles.footerHeading}>Legal</h2>
            <p className={styles.footerLink}>Privacy Policy</p>
            <p className={styles.footerLink}>Terms & Services</p>
            <p className={styles.footerLink}>Terms of Use</p>
          </div>
          <div className={styles.column}>
            <h2 className={styles.footerHeading}>Services</h2>
            <p className={styles.footerLink}>Service Name 1</p>
            <p className={styles.footerLink}>Service Name 2</p>
            <p className={styles.footerLink}>Service Name 3</p>
          </div>
          <div className={styles.column}>
            <h2 className={styles.footerHeading}>Products</h2>
            <p className={styles.footerLink}>Product Name 1</p>
            <p className={styles.footerLink}>Product Name 2</p>
            <p className={styles.footerLink}>Product Name 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
