import styles from './About.module.scss';

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.text}>
        I am a newly graduated Front-End developer with a passion for building modern, easy-to-use, and user-friendly
        user interfaces. After completing my studies and internship, I have gained experience working with libraries
        such as <strong>React</strong>, as well as applying accessibility and responsive design standards to
        real-world projects.
      </p>
      <p className={styles.text}>
        I am always proactive in learning and updating new knowledge in the field of <strong>web development</strong>.
        During my internship, I not only improved my coding skills but also learned how to work effectively in a team,
        receive feedback from mentors and colleagues to perfect the product. I am especially interested in building
        reusable component systems, optimizing browser performance, and applying <strong>UI/UX design</strong>
        principles into practice.
      </p>
      <p className={styles.text}>
        Currently, I am looking for an opportunity to become a <strong>fresher Front-End Developer</strong> in a
        technically oriented environment where I can continue to develop my expertise, contribute real value to the
        product, and learn from industry leaders.
      </p>
    </section>
  );
}

export default About;
