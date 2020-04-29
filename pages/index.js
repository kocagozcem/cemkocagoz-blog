import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cem Kocagöz | Anasayfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>

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
