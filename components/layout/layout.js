import styles from './layout.module.scss';
import NavigationMenu from '../menu/menu';
import Footer from '../footer/footer';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-146867983-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "${process.env.analyticId}");
            gtag('set', {'user_id': 'USER_ID'});`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementsByTagName("html")[0].setAttribute("lang","en")`,
          }}
        />
        <meta name="description" content={aboutme} />
      </Head>
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