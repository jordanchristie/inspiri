import React from "react";
import styled from "styled-components";
import { ReactComponent as SVG } from "../assets/images/Lotus-Flower.svg";

const LandingPage = () => (
  <Splash id="landing-page">
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
  </Splash>
);

export default LandingPage;

const Splash = styled.main``;

const HeroSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 90vh;
`;

const Title = styled.h1``;

const Tagline = styled.h3`
  font-style: italic;
  font-weight: 400;
`;

const Button = styled.a.attrs(() => ({
  className: "waves-effect waves-light btn-large",
}))``;

const SignInButton = styled.a.attrs((props) => ({
  href: `/auth/${props.type}`,
  style: { display: "block" },
}))``;

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
