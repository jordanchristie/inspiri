import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
      </div>
    );
  }
}

export default App;
