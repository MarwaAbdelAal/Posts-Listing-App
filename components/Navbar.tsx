"use client";

import Link from "next/link";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from "@/styles/nav.module.scss";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        {pathname === "/" ? (
          <GoHomeFill className={styles.nav__icon} />
        ) : (
          <GoHome className={styles.nav__icon} />
        )}
        <span
          className={`${styles.nav__text} ${
            pathname === "/" ? styles.nav__text__active : ""
          }`}
        >
          Home
        </span>
      </Link>
      <Link href="/favorites">
        {pathname === "/favorites" ? (
          <MdFavorite className={styles.nav__icon} />
        ) : (
          <MdFavoriteBorder className={styles.nav__icon} />
        )}
        <span
          className={`${styles.nav__text} ${
            pathname === "/favorites" ? styles.nav__text__active : ""
          }`}
        >
          Favorites
        </span>
      </Link>
    </nav>
  );
}
