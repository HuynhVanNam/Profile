import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>
        The site is designed very simply and loosely in <strong>Figma</strong> and coded in <strong>Visual Studio Code</strong> by myself.
        Built with <strong>ReactJs and Sass</strong>, implemented. <br />
        All text is set in Inter typeface and modern style colors. The website is now finished and ready for deployment or sharing.
      </p>
    </footer>
  );
}

export default Footer;
