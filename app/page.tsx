import Post from "../components/Post";
import styles from "@/styles/page.module.scss";
import posts from "@/data.json";

export default function Home() {
  return (
    <main className={styles.main}>
      {posts && posts?.length > 0 ? (
        posts.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <h2>No posts found.</h2>
      )}
    </main>
  );
}
