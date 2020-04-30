import styles from './aboutme.module.scss';

function AboutMe({ children }) {
  return(
    <div className={styles.container}>
      <h3 className={styles.aboutmeHeader}>Hakkımda</h3>
      <p className={styles.aboutmeText}>
      I'm Cem Kocagoz and I'm a front-end developer who focuses on improving himself about 
      developing mobile and web applications. Since the last quarter of 2018, I have been 
      working and learning with Angular and React Native technologies. I'm graduated from 
      Ege University Computer Programming associate's degree and took courses about C, 
      Python, PHP, Pascal, Delphi, SQL and Visual Basic technologies but didn't go deeper 
      about them.
      </p>
    </div>
  )
}

export default AboutMe