import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import AboutMe from '../components/aboutme/aboutme';
import { useEffect } from 'react';

export default function Home() {


  return (
    <div className="container">
      <Head>
        <title>Cem Kocagöz | Anasayfa</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-146867983-1');`,
          }}
        />
      </Head>

      <main>
        <Layout>
          <AboutMe />
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
