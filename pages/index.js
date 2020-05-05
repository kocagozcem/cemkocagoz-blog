import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import AboutMe from "../components/aboutme/aboutme";
import CurrentPosition from "../components/currentposition/current-position";
import Github from "../components/github/github";
import { aboutme } from "../assets/textvars.json";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Anasayfa | Cem Kocagöz Frontend Developer Personal Website
        </title>
      </Head>
      <main>
        <Layout>
          <AboutMe />
          <CurrentPosition />
          <Github />
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
  );
}
