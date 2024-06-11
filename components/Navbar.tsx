"use client";

import Link from "next/link";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from "@/styles/nav.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show/Hide navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    <nav className={`${styles.nav} ${showNavbar ? "" : styles.nav__hidden}`}>
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
