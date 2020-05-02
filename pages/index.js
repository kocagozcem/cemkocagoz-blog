import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import AboutMe from '../components/aboutme/aboutme';
import CurrentPosition from '../components/currentposition/current-position';
import Github from '../components/github/github';
import { aboutme } from '../assets/textvars.json';

export default function Home() {


  return (
    <div className="container">
      <Head>
        <title>Cem Kocagöz | Anasayfa</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/pattern.css" rel="stylesheet"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146867983-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-146867983-1');
            gtag('set', {'user_id': 'USER_ID'});`,
          }}
        />
        <meta 
          name="description"
          content={aboutme}
        />
      </Head>
      <main>
        <Layout>
          <AboutMe/>
          <CurrentPosition/>
          <Github/>
        </Layout>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
    
  )
}
