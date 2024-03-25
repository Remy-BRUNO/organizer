import Image from "next/image"
import styles from "./animWall.module.css"

export default function AnimWall() {
  return (
    <div className="longBox box">
      <div className={styles.containerImg}>
        <Image
          src={"/xK.gif"}
          alt=""
          fill
          className={styles.img}
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
