import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import styles from "./slug.module.scss";
import TriangleSpinner from "../../components/trianglespinner/triangle-spinner";
import { useState, useEffect } from "react";
import Comment from "../../components/comment/comment";

const Post = ({ query }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState({});
  const [isPostLoading, setPostLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(post).length == 0 && comments.length == 0) {
      getPost().then((blogPost) => {
        setPost(blogPost);
        setPostLoading(false);
      });

      getComments().then((comments) => {
        setComments(comments);
        setCommentsLoading(false);
      });
    }
  }, [isPostLoading, post, isCommentsLoading, comments]);

  const getPost = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + query["id"]
    );
    let posts = await response.json();
    return posts;
  };

  const getComments = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1" + query["id"]
    );
    let comments = await response.json();
    return comments;
  };

  if (isPostLoading) {
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
          <div className={styles.commentsSection}>
            {!isCommentsLoading ? (
              comments.length > 0 ? (
                comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))
              ) : (
                <p>No comment</p>
              )
            ) : (
              <TriangleSpinner size={50} />
            )}
          </div>
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
