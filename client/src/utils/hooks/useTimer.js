import { useState, useEffect } from "react";

const useTimer = (input) => {
  // grab input value
  const [time, setTimer] = useState(input);

  useEffect(() => {
    // convert intput to minutes
    const totalTime = time * 60;

    setTimer(totalTime);
  }, []);

  const startTimer = () => {
    setInterval(() => {
      if (time === 0) return;
      setTimer(time - 1);
    }, time);
  };

  return { time, setTimer, startTimer };
};

export default useTimer;
