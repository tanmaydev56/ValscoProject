import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const storedHrs = parseInt(localStorage.getItem("hrs")) || 2;
  const storedMins = parseInt(localStorage.getItem("mins")) || 59;
  const storedSecs = parseInt(localStorage.getItem("secs")) || 59;
  const [hrs, setHrs] = useState(storedHrs);
  const [minutes, setMinutes] = useState(storedMins);
  const [secs, setSecs] = useState(storedSecs);

  useEffect(() => {
    let interval = setInterval(() => {
      if (secs === 0) {
        if (minutes === 0) {
          if (hrs === 0) {
            setHrs(2);
            setMinutes(59);
            setSecs(59);
          } else {
            setHrs((prevHrs) => prevHrs - 1);
            setMinutes(59);
            setSecs(59);
          }
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSecs(59);
        }
      } else {
        setSecs((prevSec) => prevSec - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      localStorage.setItem("hrs", hrs.toString());
      localStorage.setItem("mins", minutes.toString());
      localStorage.setItem("secs", secs.toString());
    };
  }, [secs, minutes, hrs]);

  return (
    <>
      <h3>Time is Running Out, Grab You Spot</h3>
      <div className="time">
        {`${hrs.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}
      </div>
    </>
  );
};

export default Timer;
