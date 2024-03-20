"use client"

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
    <div>
      <h2>Horloge</h2>
      <h3>{date.getHours()} </h3>
      <h3>
        {date.getMinutes() > 10
          ? date.getMinutes().toString()
          : "0" + date.getMinutes().toString()}
      </h3>
    </div>
  )
}
