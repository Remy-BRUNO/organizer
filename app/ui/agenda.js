// "use client"

import styles from "./agenda.module.css"

export default function Agenda() {
  const today = new Date()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formatter = new Intl.DateTimeFormat("fr-FR", options)
  const dateFormat = formatter.format(today)

  return (
    <div className="mediumBox box">
      <h2>{dateFormat}</h2>
    </div>
  )
}
