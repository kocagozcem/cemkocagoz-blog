import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import AboutMe from '../components/aboutme/aboutme';
import { useEffect } from 'react';
import CurrentPosition from '../components/currentposition/current-position';
import Github from '../components/github/github';

export default function Home() {


  return (
    <div className="container">
      <Head>
        <title>Cem Kocagöz | Anasayfa</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146867983-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-146867983-1');`,
          }}
        />

        <meta 
          name="description"
          content="I'm Cem Kocagoz and I'm a front-end developer who focuses on improving himself about developing mobile and web applications. Since the last quarter of 2018, I have been working and learning with Angular and React Native technologies. I'm graduated from Ege University Computer Programming associate's degree and took courses about C,  Python, PHP, Pascal, Delphi, SQL and Visual Basic technologies but didn't go deeper about them."
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
