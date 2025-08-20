"use client"

import Link from "next/link"
import React from "react"
import styles from "./navbar.module.css"

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
]
const Navbar = () => {
  const login = true

  return (
    <nav className={styles.navbar} role="navigation">
      <ul className={styles.ul}>
        {links.map((link) => (
          <li key={link.id} className={styles.li}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          console.log("logged out")
        }}
        className={styles.button}
      >
        {login ? "Logout" : "Login"}
      </button>
    </nav>
  )
}

export default Navbar
