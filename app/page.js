import Image from "next/image";
import styles from "./page.module.css";
import CarouselUi from "./ui/carouselUi";
import Chrono from "./ui/chrono";

export default function Home() {
  return (
    <main className={styles.main}>
      <Chrono />
    </main>
  );
}
