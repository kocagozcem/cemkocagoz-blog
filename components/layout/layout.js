import styles from './layout.module.scss';
import NavigationMenu from '../menu/menu';
import Footer from '../footer/footer';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavigationMenu />
      <div className={styles.content}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
  
export default Layout