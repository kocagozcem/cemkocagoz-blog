import styles from './layout.module.scss';
import NavigationMenu from '../menu/menu';
import Footer from '../footer/footer';

function Layout({ children }) {
  return (
    <div class="pattern-cross-dots-xl" style={{"color": "#223242"} }> 
    <div className={styles.container}>
      <NavigationMenu />
      <div className={styles.content}>
        {children}
      </div>
      <Footer/>
    </div>
    </div>
  )
}
  
export default Layout