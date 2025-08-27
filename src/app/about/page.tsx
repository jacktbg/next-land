import Image from "next/image"
import React from "react"
import styles from "./page.module.css"

const About = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/banner.png"
          alt="profile"
          fill={true}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.description}>
            I’m a full-stack developer who enjoys turning
            ideas into functional and elegant solutions.
            From backend logic to frontend design, I like
            building products that are practical, scalable,
            and user-focused.{" "}
          </p>
          <p className={styles.description}>
            I value clarity, simplicity, and efficiency in
            both code and design. My approach is driven by
            curiosity and problem-solving, always looking
            for ways to improve and streamline.{" "}
          </p>
          <p className={styles.description}>
            Above all, I’m someone who thrives on learning,
            collaborating, and creating meaningful
            technology that makes a difference.
          </p>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>What I do?</h2>
          <p className={styles.description}>
            I design and build digital solutions that bridge
            functionality and user experience. My work spans
            across the stack, combining technical depth with
            a focus on clarity, performance, and impact.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              - Clear Communication
            </li>
            <li className={styles.listItem}>
              - Tailored Solutions
            </li>
            <li className={styles.listItem}>
              - End-to-End Development
            </li>
          </ul>
          <button className={styles.button} type="button">
            Contact
          </button>
        </div>
      </div>
    </main>
  )
}

export default About
