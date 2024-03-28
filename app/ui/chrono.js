"use client";

import { useEffect, useState } from "react";
import styles from "./chrono.module.css";
export default function Chrono() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div className="shortBox box">
      <div className={styles.container}>
        <h2 className={styles.title}>Chrono</h2>
        <div>
          <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :{" "}
          </span>

          <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :{" "}
          </span>
          <span className={styles.digits}>
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
        <button onClick={handleStart}>Play</button>
        <button onClick={handlePauseResume}>Break</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
