import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.intro}>
        <h1>Huynh Van Nam</h1>
        <h2>Front End Developer</h2>
        <p>I build accessible, pixel-perfect digital experiences for the web.</p>

        <nav className={styles.nav}>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#education">EDUCATION</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
          </ul>
        </nav>
      </div>

      <div className={styles.socials}>
        <a href="https://github.com/HuynhVanNam"><i className="fa-brands fa-github"></i></a>
        <a href=" #"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/nam.namhuynh.52/"><i className="fa-brands fa-facebook"></i></a>
        <a href=" #"><i className="fa-brands fa-google"></i></a>
      </div>
    </aside>
  );
}

export default Sidebar;
