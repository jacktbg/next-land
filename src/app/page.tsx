import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        src="https://imgs.search.brave.com/u4016wIqYf7xb3Ypsrc8zXT9ZeW4J1cPhhIIa0y1Owk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEzL2Jl/L2RiLzEzYmVkYjQ0/YzcwM2YzYTJhNWNl/ZTFhMWI2ODczNjQx/LmpwZw"
        alt="profile"
        width={400}
        height={400}
      />
    </div>
  )
}
