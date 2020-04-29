import styles from './menu.module.scss'

function NavigationMenu({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <nav>
        <ul>
          <li>Anasayfa</li>
          <li>TIL Blog</li>
          <li>Hakkımda</li>
        </ul>
      </nav>
    </div>
  )
}
  
export default NavigationMenu