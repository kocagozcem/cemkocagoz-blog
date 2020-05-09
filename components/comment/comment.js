import styles from "./comment.module.scss";

function Comment({ comment = {} }) {
  return (
    <div className={styles.container}>
      <div className={styles.commentHeader}>
        <span className={styles.commentHeaderText}>{"  " + comment.name}</span>
      </div>
      <p className={styles.commentBody}>{comment.body}</p>
      <span className={styles.commentDate}>16:37 04.05.2020</span>
    </div>
  );
}

export default Comment;
