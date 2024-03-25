"use client"
import styles from "./watch.module.css"
import { useEffect, useState } from "react"

export default function Watch() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="shortBox box">
      <div className={styles.watch}>
        <h3 className={styles.hours}>{date.getHours()} </h3>
        <div className={styles.bar}></div>
        <h3 className={styles.minutes}>
          {date.getMinutes() > 9
            ? date.getMinutes().toString()
            : "0" + date.getMinutes().toString()}
        </h3>
      </div>
    </div>
  )
}
