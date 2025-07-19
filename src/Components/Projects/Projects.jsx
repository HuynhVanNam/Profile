import styles from './Projects.module.scss';

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.project}>
        <h3 className={styles.projectTitle}>Profile Website</h3>
        <p className={styles.projectDesc}>
          A personal portfolio website built with HTML5, CSS3, JavaScript, React, SASS to showcase my projects and
          skills. Responsive design with a custom animated cursor and scroll navigation.
        </p>
        <p className={styles.buttonGroup}>
          <button>
            <a href="https://namhuynh-profile.netlify.app">Web Demo</a>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}></div>
            </div>
          </button>
          <button>
           <a href="https://github.com/HuynhVanNam/Profile">Link GitHub</a>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}></div>
            </div>
          </button>
        </p>
      </div>

      <div className={styles.project}>
        <h3 className={styles.projectTitle}>Todo App (React)</h3>
        <p className={styles.projectDesc}>
          A simple yet functional Todo application using React. Includes features such as filtering, state management,
          and responsive layout.
        </p>
        <p className={styles.buttonGroup}>
          <button>
            <a href=" ">Web Demo</a>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}></div>
            </div>
          </button>
          <button>
           <a href=" ">Link GitHub</a>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}></div>
            </div>
          </button>
        </p>
      </div>

      <div className={styles.project}>
        <h3 className={styles.projectTitle}>Landing Page Clone</h3>
        <p className={styles.projectDesc}>
          Recreated the UI of a popular tech landing page using semantic HTML and modern CSS (Flexbox/Grid). Focused
          on pixel-perfect layout and responsive behavior.
        </p>
        <p className={styles.buttonGroup}>
          <button>
          <a href=" ">Web Demo</a>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}></div>
            </div>
          </button>
          <button>
          <a href=" ">Link GitHub</a>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}></div>
            </div>
          </button>
        </p>
      </div>
    </section>
  );
}

export default Projects;
