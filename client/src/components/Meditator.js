import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Meditator = () => {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [text, setText] = useState("Start");

  const startSession = () => {
    setText("Bring awareness to your breath");
    return setTimeout(() => {
      setSessionStarted(true);
    }, 5000);
  };

  const resetSession = () => {
    setText("Start");
    return setSessionStarted(false);
  };

  return (
    <>
      <MeditationWrapper>
        <OuterCircle>
          <InnerCircle
            className={sessionStarted ? "meditate" : null}
            onClick={() => (sessionStarted ? resetSession() : startSession())}
          >
            <Text>{text}</Text>
          </InnerCircle>
        </OuterCircle>
      </MeditationWrapper>
    </>
  );
};

export default Meditator;

const breathe = keyframes`
    0 {
        transform: scale(1);
    }

    30% {
        transform: scale(1.2);
        background: rgb(255, 105, 97);
    }

    60% {
        transform: scale(1.2);
        background: rgb(255, 105, 97);
    }
    100% {
        transform: scale(1);
        background: rgb(105, 97, 255);
    }
`;

const MeditationWrapper = styled.section`
  height: 350px;
  width: 350px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterCircle = styled.div`
  border-radius: 50%;
  height: inherit;
  width: inherit;
`;

const InnerCircle = styled.div`
  border-radius: 50%;
  cursor: pointer;
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(105, 97, 255);

  &.meditate {
    animation: ${breathe} 10s linear infinite;
  }
`;

const Text = styled.h1`
  text-align: center;
  color: #fff;
`;
