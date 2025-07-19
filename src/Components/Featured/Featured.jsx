
import styles from './Featured.module.scss';
import image_halcyon from '../../Assets/images/img-halcyon.png'
import image_lodas from '../../Assets/images/img-lodas.png'
import image_sharp from '../../Assets/images/img-sharp.png'
import image_slick from '../../Assets/images/img-slick.png'

const featuredItems = [
  {
    image: image_halcyon,
    title: 'Halcyon Theme',
    link: 'https://halcyon-theme.netlify.app',
    description: 'Minimal dark, blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    tags: [],
  },
  {
    image: image_sharp,
    title: 'Custom Shape Dividers',
    link: 'https://www.shapedivider.app',
    description: 'Our Shape Splitters are pre-made SVG shapes that are not dynamic to the settings...',
    tags: ['Learn', 'Experience', 'Analysis'],
  },
  {
    image: image_slick,
    title: 'Slick',
    link: 'https://kenwheeler.github.io/slick/',
    description: 'Fully responsive. Scales with its container. Swipe enabled. Accessible.',
    tags: ['Experience', 'Analysis'],
  },
  {
    image: image_lodas,
    title: 'Lodash',
    link: 'https://lodash.com',
    description: 'A modern JavaScript utility library delivering modularity, performance & extras.',
    tags: ['View', 'Experience', 'Analysis'],
  }
];

function Featured() {
  return (
    <section id="featured" className={styles.featuredSection}>
      <h2 className={styles.title}>Extension</h2>
      {featuredItems.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.image}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.cardTitle}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title} ↗
              </a>
            </h3>
            <p className={styles.description}>{item.description}</p>
            {item.tags.length > 0 && (
              <div className={styles.tags}>
                {item.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Featured;
