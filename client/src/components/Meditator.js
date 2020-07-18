import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Meditator = () => {
  const [sessionStarted, setSessionStarted] = useState(false);

  const startSession = () => {
    return setTimeout(() => setSessionStarted(true), 5000);
  };

  const stopSession = () => {
    return setSessionStarted(false);
  };

  return (
    <>
      <MeditationWrapper className={sessionStarted ? "meditate" : null}>
        <OuterCircle>
          <InnerCircle
            onClick={() => (sessionStarted ? stopSession() : startSession())}
          >
            <Text>
              {sessionStarted ? (
                <i className="fa fa-pause"></i>
              ) : (
                <i className="fa fa-play"></i>
              )}
            </Text>
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
        transform: scale(1.4);
    } 

    60% {
        transform: scale(1.4);
    }
    100% {
        transform: scale(1);
    }
`;

const MeditationWrapper = styled.section`
  height: 350px;
  width: 350px;
  border: 1px solid red;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &.meditate {
    animation: ${breathe} 10s linear infinite;
  }
`;

const OuterCircle = styled.div`
  border: 1px solid green;
  border-radius: 50%;
  height: inherit;
  width: inherit;
`;

const InnerCircle = styled.div`
  border: 5px solid magenta;
  border-radius: 50%;
  cursor: pointer;
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1``;
