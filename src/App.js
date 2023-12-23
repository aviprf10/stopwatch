import { useEffect, useRef, useState } from "react";
import "./Styles.css";

const format = (timer) => {
  const mins = Math.floor(timer / 60);
  timer %= 60;
  return `${mins}:${timer < 10 ? "0" : ""}${timer}`;
};

export default function App() {
  const [isActivated, setisActivated] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerId = useRef(null);

  const toggleHandler = () => {
    setisActivated(!isActivated);
  };

  const resetHandler = () => {
    setTimer(0);
    setisActivated(false);
  };

  useEffect(() => {
    let intervalID;

    if (isActivated) {
      intervalID = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [isActivated, timer]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>{format(timer)}</p>
      <button onClick={toggleHandler}>{isActivated ? "Stop" : "Start"}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
