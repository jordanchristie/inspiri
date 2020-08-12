import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUser } from "../actions/index";

import Card from "../components/Card";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderSavedQuotes = (user) => {
    return user.savedQuotes.reverse().map((quote, i) => {
      return <Card key={i} {...quote} />;
    });
  };

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div id="dashboard-page">
        <section>
          <h1>Hello {user.username}</h1>
          {user.savedQuotes && user.savedQuotes.length ? (
            this.renderSavedQuotes(user)
          ) : (
            <p>
              {" "}
              You don't have any quotes yet.
              <Link to="/explore"> Click here</Link> to start!
            </p>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, { fetchUser })(Dashboard);
