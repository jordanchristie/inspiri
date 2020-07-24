import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import QuotesPage from "../pages/QuotesPage";
import MindfulnessPage from "../pages/MindfulnessPage";
import JournalingPage from "../pages/JournalingPage";
import styled from "styled-components";
import { GlobalStyle } from "../utils/styles/global";
import { UserContextProvider } from "../context/userContext";
import { QuoteContextProvider } from "../context/quoteContext";

class App extends Component {
  render() {
    return (
      <UserContextProvider>
        <QuoteContextProvider>
          <Router>
            <>
              <GlobalStyle />
              <Header />
              <Container>
                <Route exact path="/" component={LandingPage} />
                <Route path="/quotes" component={QuotesPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/journal" component={JournalingPage} />
                <Route path="/mindfulness" component={MindfulnessPage} />
              </Container>
            </>
          </Router>
        </QuoteContextProvider>
      </UserContextProvider>
    );
  }
}

export default App;

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 90% @media screen and (min-width: 933px) {
    width: 70%;
  }

  @media screen and (min-width: 601px) {
    width: 85%;
  }
`;
