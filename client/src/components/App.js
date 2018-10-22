import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import Header from './Header';
import Dashboard from './Dashboard';
import ExplorePage from './ExplorePage';
import { fetchUser } from '../actions/index';



class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
          { user ?
            <Redirect to="/dashboard"/>
          :
            <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/explore" component={ExplorePage} />
            </div>
          }
          </div>
        </div>
      </Router>
    );
  }
}



export default connect(null, {fetchUser})(App);
