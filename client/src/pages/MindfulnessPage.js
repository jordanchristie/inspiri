import React from "react";
import Meditator from "../components/Meditator";
import styled from "styled-components";
import useTimer from "../utils/hooks/useTimer";

const MindfulnessPage = () => {
  const { time, setTimer, startTimer } = useTimer(5);
  console.log(time);
  return (
    <div>
      <h1>Mindful</h1>
      <Meditator />
      {/* <TimeInput type="number" name="time" value={time} />
      <h1 onClick={() => startTimer()}>{time}</h1> */}
    </div>
  );
};

export default MindfulnessPage;

const TimeInput = styled.input`
  width: 200px;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 10px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid magenta;
`;
