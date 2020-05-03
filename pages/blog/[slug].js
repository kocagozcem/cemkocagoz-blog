import { useRouter } from "next/router";

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
