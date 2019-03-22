import React from 'react';
import styled from 'styled-components';


const LandingPage = () => (
    <Splash id="landing-page">
        <Title>Inspiri</Title>
        <Tagline>Collect your inspiration.</Tagline>
        <SignInButton type="facebook">
            <SignInType className="fa fa-facebook" ></SignInType>
            Login With Facebook
        </SignInButton>
        <SignInButton type="twitter">
            <SignInType className="fa fa-twitter"></SignInType>
            Login With Twitter
        </SignInButton>
        <SignInButton type="google">
            <SignInType className="fa fa-google" ></SignInType>
            Login With Google
        </SignInButton>
    </Splash>
)


export default LandingPage;

const Splash = styled.main`
    text-align: center;
`

const Title = styled.h1`

`

const Tagline = styled.h3`
    font-style: italic;
    font-weight: 400;
`

const SignInButton = styled.a.attrs({
    className: "waves-effect waves-light btn-large",
    href: props => `/auth/${props.type}`
})`

`

const SignInType = styled.i`
    margin-right: 10px;
`