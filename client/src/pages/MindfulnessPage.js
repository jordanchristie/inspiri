import React from "react";
import Meditator from "../components/Meditator";
import styled from "styled-components";
import useTimer from "../utils/hooks/useTimer";

const MindfulnessPage = () => {
  const { totalTime, setTimer } = useTimer(5);
  return (
    <div>
      <h1>Mindful</h1>
      <Meditator />
      {/* <TimeInput
        type="number"
        name="time"
        value={totalTime}
        onChange={(e) => setTimer(e.target.value)}
      /> */}
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
