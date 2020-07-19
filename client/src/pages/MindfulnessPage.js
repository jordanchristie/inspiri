import React, { useState } from "react";
import Meditator from "../components/Meditator";
import styled from "styled-components";

const MindfulnessPage = () => {
  const [timer, setTimer] = useState(5);
  console.log(timer);
  return (
    <div>
      <h1>Mindful</h1>
      <Meditator />
      <TimeInput
        type="number"
        name="time"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
      />
    </div>
  );
};

export default MindfulnessPage;

const TimeInput = styled.input`
  width: 200px;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 10px;
`;
