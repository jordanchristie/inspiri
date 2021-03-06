import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExploreQuotes } from "../actions/index";
import Card from "../components/Card";

class ExplorePage extends Component {
  componentDidMount() {
    this.renderQuotes();
  }

  renderQuotes() {
    this.props.fetchExploreQuotes();
  }

  render() {
    return (
      <div>
        <h1>Explore</h1>
        <Card
          author={this.props.randomQuote.quoteAuthor}
          quote={this.props.randomQuote.quoteText}
        />
        <a href="/explore">Next Quote</a>
      </div>
    );
  }
}

const mapStateToProps = ({ randomQuote }) => {
  return { randomQuote };
};

export default connect(mapStateToProps, { fetchExploreQuotes })(ExplorePage);
