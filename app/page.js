import Image from "next/image"
import styles from "./page.module.css"
import CarouselUi from "./ui/carouselUi"
import Watch from "./ui/watch"

export default function Home() {
  return (
    <main className={styles.main}>
      <Watch />
    </main>
  )
}
