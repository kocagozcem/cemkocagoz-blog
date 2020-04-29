import styles from './layout.module.scss';
import NavigationMenu from '../menu/menu';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavigationMenu />
      {children}
    </div>
  )
}
  
export default Layout