import ImageCard from "./ImageCard"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          Building Scalable Solutions for Your Business
        </h1>
        <p className={styles.description}>
          Turning your Idea into Reality. Where your
          business goals meet technology.
        </p>
        <button className={styles.button}>
          Explore My Projects
        </button>
      </div>
      <div className={styles.imageContainer}>
        <ImageCard />
      </div>
    </main>
  )
}
