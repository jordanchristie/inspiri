import { useState } from "react";

const useTimer = (input) => {
  // grab input value
  const [time, setTimer] = useState(input);

  // convert intput to minutes
  const totalTime = time * 60;

  return { totalTime, setTimer };
};

export default useTimer;
