import styles from './Education.module.scss';

function Education() {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>Dong A University</strong> (2021–2023) <br />
          Relevant Courses: Web Developer
        </li>
        <li className={styles.item}>
          <strong>Code Center</strong> - Fullstack Developer (2023 - 2024) <br />
          Topics: HTML, CSS, JavaScript, Angular, Java, Spring Boot, MVC
        </li>
        <li className={styles.item}>
          <strong>Self-Study FrontEnd Program</strong> - FrontEnd Developer (2024 - Present). Learning through online
          platforms (e.g., freeCodeCamp, YouTube, W3Schools, F8). <br />
          Built hands-on projects to improve HTML5, CSS3, JavaScript (ES6+), ReactJs, SASS
        </li>
      </ul>
    </section>
  );
}

export default Education;
