import styles from './layout.module.scss';
import NavigationMenu from '../menu/menu';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavigationMenu />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
  
export default Layout