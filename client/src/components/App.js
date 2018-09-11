import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Header from './Header';
import Dashboard from './Dashboard';
import ExplorePage from './ExplorePage';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={LandingPage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/dashboard" component={Dashboard}/>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
