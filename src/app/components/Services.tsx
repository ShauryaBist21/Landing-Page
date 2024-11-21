import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Digital Transformation</h3>
          <p className={styles.serviceDescription}>
            Digital Strategy Consulting and Technology Consulting for comprehensive digital transformation.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>AI as a Service</h3>
          <p className={styles.serviceDescription}>
            AI Product Strategy and AI Smart Tools Development, including visual recognition and chatbots.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Generative AI</h3>
          <p className={styles.serviceDescription}>
            GA at Enterprise scale with full-stack AI development platform and centralized AI governance.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Enterprise Solution</h3>
          <p className={styles.serviceDescription}>
            Implementing and customizing ERP and CRM systems to improve business operations.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Data Analytics</h3>
          <p className={styles.serviceDescription}>
            Big Data Analytics and Business Intelligence for actionable insights.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Digital Marketing</h3>
          <p className={styles.serviceDescription}>
            SEO, SEM, and Social Media Marketing services to boost online presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
