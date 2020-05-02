import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout';

// var classNames = require('classnames');
// https://github.com/JedWatson/classnames

export default function Blog(){
    return(
        <div className="container">
            <Head>
                <title>Cem Kocagöz | Blog</title>
            </Head>
            <Layout>
                <h1>Blog page</h1>
                <h3>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h3>
            </Layout>
        </div>
        
    )
}