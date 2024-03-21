import Image from "next/image"
import styles from "./page.module.css"
import CarouselUi from "./ui/carouselUi"
import Watch from "./ui/watch"
import AnimWall from "./ui/animWall"
import Agenda from "./ui/agenda"
import Note from "./ui/note"
import Lofi from "./ui/lofi"
import ToDoListe from "./ui/toDoListe"

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimWall />
      <Watch />
      <Agenda />
      <Note />
      <Lofi />
      <ToDoListe />
    </main>
  )
}
