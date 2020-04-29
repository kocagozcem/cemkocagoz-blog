import styles from './menu.module.scss'

function NavigationMenu({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>Cem Kocagöz</h2>
      </div>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.menuItem}>Anasayfa</li>
          <li className={styles.menuItem}>TIL Blog</li>
          <li className={styles.menuItem}>Hakkımda</li>
        </ul>
      </nav>
    </div>
  )
}
  
export default NavigationMenu