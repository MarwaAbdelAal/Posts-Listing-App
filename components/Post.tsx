"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/post.module.scss";
import { MdFavorite } from "react-icons/md";

export default function Post(post: PostProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  // Use effect to load favorite status from localStorage on mount
  useEffect(() => {
    const favoritePosts = JSON.parse(
      localStorage.getItem("favoritePosts") || "[]"
    );
    if (favoritePosts.includes(post.id)) {
      setIsFavorite(true);
    }
  }, [post.id]);

  // Use effect to save favorite status to localStorage when it changes
  useEffect(() => {
    const favoritePosts = JSON.parse(
      localStorage.getItem("favoritePosts") || "[]"
    );
    if (isFavorite) {
      if (!favoritePosts.includes(post.id)) {
        favoritePosts.push(post.id);
        localStorage.setItem("favoritePosts", JSON.stringify(favoritePosts));
      }
    } else {
      const updatedFavorites = favoritePosts.filter(
        (id: string) => id !== post.id
      );
      localStorage.setItem("favoritePosts", JSON.stringify(updatedFavorites));
    }
  }, [isFavorite, post.id]);

  return (
    <div className={styles.post}>
      <div className={styles.post__authorContainer}>
        <Image
          src={post.avatar}
          alt={post.author}
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
        <span className={styles.post__authorContainer__authorName}>
          {post.author}
        </span>
      </div>
      <div className={styles.post__imageContainer}>
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "50%",
            borderRadius: "0.2rem",
            opacity: 0.85,
          }}
          priority={false}
        />
        <div className={styles.post__imageContainer__overlay}>
          <div className={styles.post__imageContainer__overlay__text}>
            <h3>{post.title}</h3>
            <p>{post.views} Views</p>
          </div>
          <MdFavorite
            className={styles.post__imageContainer__overlay__favIcon}
            style={{ color: isFavorite ? "red" : "white" }}
            onClick={handleFavoriteToggle}
          />
        </div>
      </div>
      <div className={styles.post__likes}>
        <MdFavorite className={styles.post__icon} />
        <span>{post.likes} likes</span>
      </div>
      <div className={styles.post__body}>
        <p>{post.body}</p>
        {post.tags?.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
        <div className={styles.post__body__comments}>
          <p>View {post.comments} comments</p>
        </div>
      </div>
    </div>
  );
}
