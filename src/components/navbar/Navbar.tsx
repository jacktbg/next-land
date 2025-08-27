"use client"

import Link from "next/link"
import React, { useState } from "react"
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
  const [activeId, setActiveId] = useState<number | null>(
    null
  )
  const login = true

  return (
    <nav className={styles.navbar} role="navigation">
      <Link className={styles.logo} href="/">
        jacktbg
      </Link>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li
            onClick={() => setActiveId(link.id)}
            key={link.id}
            className={`${styles.li} ${
              activeId === link.id ? styles.active : ""
            }`}
          >
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
        <li
          onClick={() => {
            console.log("logged out")
          }}
          className={styles.button}
        >
          {login ? "Logout" : "Login"}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
