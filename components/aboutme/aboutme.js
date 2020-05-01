import styles from './aboutme.module.scss';
import { aboutme } from '../../assets/aboutme.json';

function AboutMe({ children }) {
  return(
    <div className={styles.container}>
      <h3 className={styles.aboutmeHeader}>Hakkımda</h3>
      <p className={styles.aboutmeText}>{aboutme}</p>
    </div>
  )
}

export default AboutMe