import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Meditator = () => {
  const [sessionStarted, setSessionStarted] = useState(false);

  useEffect(() => {
    sessionStarted
      ? setTimeout(() => setSessionStarted(true), 5000)
      : setSessionStarted(false);
  }, [sessionStarted]);

  return (
    <>
      <MeditationWrapper className={sessionStarted ? "meditate" : null}>
        <OuterCircle>
          <InnerCircle onClick={() => setSessionStarted(!sessionStarted)}>
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
`;

const InnerCircle = styled.div`
  border: 5px solid magenta;
  border-radius: 50%;
  padding: 10em;
  cursor: pointer;
`;

const Text = styled.h1``;
