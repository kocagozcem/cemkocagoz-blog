import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import styles from "./slug.module.scss";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className={styles.container}></div>
    </Layout>
  );
};

export default Post;
