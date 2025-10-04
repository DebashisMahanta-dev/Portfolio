import React from "react";
import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML & CSS", level: 95 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 50 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Data & Tools",
    skills: [
      { name: "Python / Pandas", level: 75 },
      { name: "Data Visualization", level: 70 },
      { name: "Git & CI", level: 85 },
      { name: "Docker", level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Skills</h1>
        <p className={styles.lead}>
          A concise overview of technologies and tools I use regularly.
        </p>
      </header>

      <section className={styles.grid}>
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className={styles.card}
            aria-labelledby={group.title}
          >
            <h2 id={group.title} className={styles.cardTitle}>
              {group.title}
            </h2>
            <ul className={styles.skillList}>
              {group.skills.map((s) => (
                <li key={s.name} className={styles.skillItem}>
                  <div className={styles.skillRow}>
                    <span className={styles.skillName}>{s.name}</span>
                    <span className={styles.skillLevel}>{s.level}%</span>
                  </div>
                  <div
                    className={styles.progress}
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className={styles.progressValue}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}