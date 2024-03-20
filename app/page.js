import Image from "next/image"
import styles from "./page.module.css"
import CarouselUi from "./ui/carouselUi"

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselUi />
      <CarouselUi />
      <CarouselUi />
      <CarouselUi />
      <CarouselUi />
      <CarouselUi />
    </main>
  )
}
