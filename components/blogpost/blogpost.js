import styles from "./blogpost.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";

var classNames = require("classnames");

const BlogPost = ({ post, blogpostClicked, style }) => {
  return (
    <Link href={"blog/" + post.title.split(" ").join("-")}>
      <div style={style} className={styles.container}>
        <h3 className={styles.postHeader}>{post.title}</h3>
        <p className={`${styles.postContext} ${styles.unselectable}`}>
          {post.body.split(" ").splice(0, 25).join(" ")}
        </p>
        <p className={styles.hiddenPostContext}>
          {post.body.split(" ").splice(25).join(" ")}
        </p>
      </div>
    </Link>
  );
};

export default BlogPost;