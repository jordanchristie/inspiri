import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import QuotesPage from "../pages/ExplorePage";
import MindfulnessPage from "../pages/MindfulnessPage";
import JournalingPage from "../pages/JournalingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={LandingPage} />
            <Route path="/quotes" component={QuotesPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/journal" component={JournalingPage} />
            <Route path="/mindfulness" component={MindfulnessPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
