import styles from "./blog.module.scss";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/layout";
import BlogPost from "../../components/blogpost/blogpost";
import TriangleSpinner from "../../components/trianglespinner/triangle-spinner";
import { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (posts.length == 0) {
      getPosts().then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
    }
  }, [isLoading, posts]);

  const getPosts = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=" + 1 + "_limit=" + 10
    );
    let posts = await response.json();
    return posts;
  };

  if (!isLoading && posts.length > 0) {
    return (
      <Layout>
        <Head>
          <title>Blog | Cem Kocagöz Frontend Developer Personal Website</title>
        </Head>
        <div className={styles.container}>
          {posts.map((post, index) => (
            <BlogPost
              key={post.id}
              post={post}
              blogpostClicked={() => setSelectedState2(post.id)}
            />
          ))}
        </div>
      </Layout>
    );
  } else if (!isLoading) {
    return (
      <Layout>
        <Head>
          <title>Blog | Cem Kocagöz Frontend Developer Personal Website</title>
        </Head>
        <div className={styles.container}>No any post created yet</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>Blog | Cem Kocagöz Frontend Developer Personal Website</title>
      </Head>
      <div className={styles.loadingContainer}>
        <TriangleSpinner size={150} />
      </div>
    </Layout>
  );
}
