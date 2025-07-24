import styles from './Skills.module.scss';

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skillGroup}>
        <h3 className={styles.skillTitle}>Interface builder tools</h3>
        <p className={styles.skillText}>
          - Tailwind CSS or Bootstrap <br />
          - Figma
        </p>
      </div>

      <div className={styles.skillGroup}>
        <h3 className={styles.skillTitle}>Additional skills</h3>
        <p className={styles.skillText}>
          - Responsive Design <br />
          - Git / GitHub <br />
          - RESTful API <br />
          - Package managers: npm or yarn <br />
          - Build tools: Vite, Webpack, Babel
        </p>
      </div>

      <div className={styles.skillGroup}>
        <h3 className={styles.skillTitle}>English Language Course</h3>
        <p className={styles.skillText}>
          Currently completing an English course focusing on communication skills (speaking, listening, reading and
          writing)
        </p>
      </div>
    </section>
  );
}

export default Skills;
