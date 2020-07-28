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
        <OuterCircle
          onClick={() => (sessionStarted ? resetSession() : startSession())}
        >
          <InnerCircle className={sessionStarted ? "meditate" : null} />
          <Text className={text === "Start" ? null : "fade"}>{text}</Text>
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

const fade = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
  position: relative;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  margin: 0;

  &.fade {
    animation: ${fade} 5s ease;
  }
`;
