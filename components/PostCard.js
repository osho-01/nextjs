import Link from "next/link";
import styles from "../styles/PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 50)}...</p>
      <Link href={`/posts/${post.id}`}>
      <button className={styles.button}>Read More</button>
      </Link>
    </div>
  );
}
