import React from "react";
import styled from "styled-components";
import { ReactComponent as SVG } from "../assets/images/Lotus-Flower.svg";

const LandingPage = () => (
  <>
    <HeroSection>
      <div style={{ width: "45%" }}>
        <Title>Inspiri</Title>
        <Tagline>Put your mental health first.</Tagline>
        <SignInButton type="facebook">
          <SignInType className="fa fa-facebook"></SignInType>
          Login With Facebook
        </SignInButton>
        <SignInButton type="twitter">
          <SignInType className="fa fa-twitter"></SignInType>
          Login With Twitter
        </SignInButton>
        <SignInButton type="google">
          <SignInType className="fa fa-google"></SignInType>
          Login With Google
        </SignInButton>
      </div>
      <Lotus />
    </HeroSection>

    <Section>
      <SectionTitle>Collect your inspiration</SectionTitle>
      <SectionText>
        Gather quotes that lift your vibration into your positive thought
        garden.
      </SectionText>
      <Button href="/quotes">Explore Quotes</Button>
    </Section>

    <Section>
      <SectionTitle>Journal your journey</SectionTitle>
      <SectionText>
        Look back on your moments of gratitude, times of struggle, and prepare
        yourself to face the day.
      </SectionText>
      <Button href="/journal">Create Your Journal</Button>
    </Section>

    <Section>
      <SectionTitle>Breathe.</SectionTitle>
      <SectionText>Take some time out of your day to be present.</SectionText>
      <Button href="/mindfulness">Start a Mindfulness Session</Button>
    </Section>
  </>
);

export default LandingPage;

const HeroSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
`;

const Title = styled.h1``;

const Tagline = styled.h3`
  font-style: italic;
  font-weight: 400;
`;

export const Button = styled.a`
  height: 54px;
  color: white;
  background: #00796b;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 2px;
  &:hover {
    background: #2bbbad;
  }
`;

const SignInButton = styled.a.attrs((props) => ({
  href: `/auth/${props.type}`,
  style: { display: "block" },
}))`
  margin-top: 2em;
`;

const SignInType = styled.i`
  margin-right: 10px;
`;

const Lotus = styled(SVG)`
  width: 500px;
  height: 300px;
  align-self: center;
`;

const Section = styled.section``;

const SectionTitle = styled.h2``;

const SectionText = styled.p``;
