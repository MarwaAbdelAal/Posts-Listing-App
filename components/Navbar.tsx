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
      <Link
        href="/"
        className={`${styles.nav__item} ${
          pathname === "/" ? styles.nav__item__active : ""
        }`}
      >
        {pathname === "/" ? (
          <GoHomeFill
            className={`${styles.nav__icon} ${styles.nav__icon__active}`}
          />
        ) : (
          <GoHome className={styles.nav__icon} />
        )}
        <span className={styles.nav__text}>Home</span>
      </Link>
      <Link
        href="/favorites"
        className={`${styles.nav__item} ${
          pathname === "/favorites" ? styles.nav__item__active : ""
        }`}
      >
        {" "}
        {pathname === "/favorites" ? (
          <MdFavorite
            className={`${styles.nav__icon} ${styles.nav__icon__active}`}
          />
        ) : (
          <MdFavoriteBorder className={styles.nav__icon} />
        )}
        <span className={styles.nav__text}>Favorites</span>
      </Link>
    </nav>
  );
}
