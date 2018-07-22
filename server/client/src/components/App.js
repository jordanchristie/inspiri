import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import Header from './Header';
import Dashboard from './Dashboard';
import ExplorePage from './ExplorePage';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
          <Header />
              <Route exact path="/" component={LandingPage} />
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/explore" component={ExplorePage} />
        </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({authorized}) => {
  return {
      authorized
  }
}

export default connect(mapStateToProps)(App);
