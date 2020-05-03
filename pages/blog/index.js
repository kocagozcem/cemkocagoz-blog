import styles from "./blog.module.scss";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/layout";
import BlogPost from "../../components/blogpost/blogpost";
import TriangleSpinner from "../../components/trianglespinner/triangle-spinner";
import { useState, useEffect } from "react";

const deneme = [
  {
    id: 1,
    header: "Şöyle oldu böyle oldu ama neden?",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto quisquam tenetur ad, ratione accusantium sequi ipsa quaerat laborum at voluptate blanditiis? Unde iure magnam tempora error distinctio omnis quae consequatur, mollitia facere, quibusdam veniam, harum ipsum itaque aspernatur minus saepe quidem maxime ipsam. Incidunt corporis fugit minus nobis officia rerum, deleniti officiis adipisci minima, recusandae repudiandae repellendus illum! Quod cum ducimus, doloremque magnam eos sunt nobis incidunt ipsam sit, aliquam, similique nihil corrupti? Repellendus ad sint cum voluptas accusantium minus excepturi tempore tenetur illo corrupti, nisi dolores numquam recusandae id adipisci eveniet. Omnis rerum vero harum laudantium error culpa sed, sapiente iure aut deleniti ipsam sint numquam, totam repellat beatae earum veritatis voluptatem velit corporis quisquam quod. Voluptas non necessitatibus vitae maiores cumque ad consectetur saepe eius rerum ea! Facilis deleniti eum sint fuga voluptas in. Quis, deserunt. Debitis reprehenderit, minima iste ad ex quam nostrum ut aliquam autem voluptas corrupti labore, incidunt delectus, itaque ipsum in inventore odit? Est explicabo et omnis inventore necessitatibus ad reprehenderit nulla maiores voluptas esse quasi assumenda, tempora, illum aliquam harum magni ratione accusantium atque itaque. At quod, architecto inventore fugiat necessitatibus vero numquam nemo ex corporis odio recusandae dicta impedit eum maxime est veniam commodi cumque tenetur dolores libero. Id asperiores tenetur commodi, magni non quod distinctio quae itaque assumenda beatae veritatis nostrum perspiciatis, possimus quidem ipsam modi debitis quibusdam rem inventore repudiandae. Molestiae quibusdam consectetur maxime facere laborum voluptates a nostrum accusantium neque sapiente. Ea ad id sint eos quidem non iste ex quis magnam pariatur deserunt temporibus aut necessitatibus iure velit soluta quia quos, quasi accusamus voluptas. Tenetur officia doloribus suscipit sit, repellat libero incidunt vero nam necessitatibus veniam impedit deleniti ipsa architecto magni fugiat sed quibusdam! Aliquid expedita commodi aliquam cupiditate, maiores ullam debitis nisi temporibus error voluptas facilis repudiandae omnis culpa dolor ratione quo, dolorem magni ab voluptates, sunt est at? Vitae animi illum, fugit esse odio hic recusandae enim placeat accusamus doloribus cumque provident, tenetur ad quos? Et aperiam debitis dolorum consequuntur ea, quam, ducimus nobis facilis enim quisquam obcaecati velit, quia incidunt error. Eum dolorem aliquid temporibus magnam inventore maiores iusto molestias perspiciatis ullam eligendi, voluptas consequatur aliquam modi iure illo corporis quisquam? Laborum fugit ducimus, voluptate dicta quis libero eum odio perferendis culpa quidem. Vitae, dolor itaque? Perspiciatis aut neque animi rem non tempore corrupti libero? Atque ipsa ex non nam est itaque aspernatur praesentium.",
    visible: true,
    selected: false,
  },
  {
    id: 2,
    header: "Lorem ipsum dolor sit",
    context:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ipsum recusandae suscipit debitis, ad soluta nemo est!",
    visible: true,
    selected: false,
  },
  {
    id: 3,
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero aliquid voluptas",
    context:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque libero, ad quo corrupti eveniet repudiandae sunt tenetur. Aspernatur, tenetur voluptate.",
    visible: true,
    selected: false,
  },
];

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
      "http://jsonplaceholder.typicode.com/posts?_page=" + 1 + "_limit=" + 10
    );
    let posts = await response.json();
    return posts;
  };

  if (!isLoading) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Blog | Cem Kocagöz Frontend Developer Personal Website</title>
        </Head>
        <Layout>
          {posts.map((post, index) => (
            <BlogPost
              key={post.id}
              post={post}
              blogpostClicked={() => setSelectedState2(post.id)}
            />
          ))}
        </Layout>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <TriangleSpinner />
    </div>
  );
}
