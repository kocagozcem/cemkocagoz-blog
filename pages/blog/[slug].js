import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import styles from "./slug.module.scss";
import TriangleSpinner from "../../components/trianglespinner/triangle-spinner";
import { useState, useEffect } from "react";

const Post = ({ query }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(post).length == 0) {
      getPost().then((blogPost) => {
        console.log(blogPost);
        setPost(blogPost);
        setLoading(false);
      });
    }
  }, [isLoading, post]);

  const getPost = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + query["id"]
    );
    let posts = await response.json();
    return posts;
  };

  if (isLoading) {
    return (
      <Layout>
        <div className={styles.spinnerContainer}>
          <TriangleSpinner size={150} />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={styles.container}>
          <h2 className={styles.postHeader}>{post.title}</h2>
          <p className={styles.postContext}>{post.body}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.spinnerContainer}>
        <TriangleSpinner size={150} />
      </div>
    </Layout>
  );
};

Post.getInitialProps = ({ query }) => {
  return { query };
};

export default Post;
