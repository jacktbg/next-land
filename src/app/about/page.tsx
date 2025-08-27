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
      <div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tempora est amet neque.
            Consequuntur repellendus culpa eos, ex magnam
            ratione voluptas quis obcaecati qui optio, omnis
            sequi deleniti perferendis non ipsa.
          </p>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>What I do?</h2>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vero excepturi labore
            consequuntur, commodi quisquam nihil facilis
            veniam dicta eius corrupti nisi animi nam
            praesentium aliquid autem laboriosam explicabo
            aut optio.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Documentation
            </li>
            <li className={styles.listItem}>
              Design Architecture
            </li>
            <li className={styles.listItem}>
              Develop the Product
            </li>
          </ul>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
    </main>
  )
}

export default About
