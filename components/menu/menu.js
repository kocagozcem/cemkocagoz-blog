import styles from './menu.module.scss'
import Link from 'next/link'

var classNames = require('classnames');

function NavigationMenu({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <h2 className={styles.logoName}>Cem</h2>
          <h2 className={styles.logoSurname}> Kocagöz</h2>
        </div>
      </div>
      <nav>
        <ul className={styles.ul}>
          <Link href="/">
            <li className={styles.menuItem}>Anasayfa</li>
          </Link>
          <Link href="blog">
            <li className={styles.menuItem}>TIL Blog</li>
          </Link>
          <Link href="/">
            <li className={styles.menuItem}>Hakkımda</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
  
export default NavigationMenu