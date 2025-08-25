"use client"
import React, { useState } from "react"
import styles from "./page.module.css"
import Image from "next/image"

function ImageCard() {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      className={`${styles.imageWrapper} ${
        active ? styles.active : ""
      }`}
      onMouseEnter={() => setActive(true)}
    >
      <Image
        src="/profile.svg"
        alt="profile"
        fill={true}
        className={styles.image}
      />
    </div>
  )
}

export default ImageCard
