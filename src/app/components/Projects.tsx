"use client"; // Ensure compatibility with React hooks

import React from "react";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "ZenoMed™",
      description: "Smart Telemedicine platform",
      country: "India",
    },
    {
      title: "ZenoTics™",
      description: "Predictive Analytics",
      country: "Vietnam",
    },
    {
      title: "ZenoSCM™",
      description: "AI-Powered Retail Analytics",
      country: "India",
    },
    {
      title: "Zenotail™",
      description: "GAI based Smart SCM Platform",
      country: "Vietnam",
    },
    {
      title: "DigiZen™",
      description: "AI powered Digital Marketing platform",
      country: "India",
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Past & Current Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.projectCountry}>Country: {project.country}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
