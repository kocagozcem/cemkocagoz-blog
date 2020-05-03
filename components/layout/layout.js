import styles from "./layout.module.scss";
import NavigationMenu from "../menu/menu";
import Footer from "../footer/footer";
import { aboutme } from "../../assets/textvars.json";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c1a57b" />
        <link rel="apple-touch-icon" href="icons/icon-192x192.png" />
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
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
