import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

export default function Stopwatch(){
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
          setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
      }, 1000);
    }else{
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID);
  }, [isRunning]);

  const startstop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  }

  const formatTime = (seconds) =>{
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>  
      <hi>Stopwatch</hi>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startstop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>  
  );
}