"use client";

import styles from "@/styles/page.module.scss";
import Post from '@/components/Post'
import Spinner from "@/components/Spinner";
import posts from '@/data.json'
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritePostsIds = JSON.parse(localStorage.getItem('favoritePosts') || '[]');
    const favoritePosts = posts.filter((post) => favoritePostsIds.includes(post.id));
    setFavoritePosts(favoritePosts);
    setLoading(false);
  }, [])

  return (
    <main className={styles.main}>
      {loading ? (
        <Spinner />
      ) :
        favoritePosts && favoritePosts?.length > 0 ? (
          favoritePosts.map((post) => <Post key={post.id} {...post} />)
        ) : (
          <h2>No Favorite Posts Yet.</h2>
        )}
    </main>

  )
}