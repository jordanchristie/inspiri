import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExploreQuotes } from "../actions/index";
import Card from "../components/Card";

class QuotesPage extends Component {
  componentDidMount() {
    this.renderQuotes();
  }

  renderQuotes() {
    this.props.fetchExploreQuotes();
  }

  render() {
    const { randomQuote } = this.props;
    return (
      <div>
        <h1>Explore</h1>
        <Card author={randomQuote.quoteAuthor} quote={randomQuote.quoteText} />
        <a href="/quotes">Next Quote</a>
      </div>
    );
  }
}

const mapStateToProps = ({ randomQuote }) => {
  return { randomQuote };
};

export default connect(mapStateToProps, { fetchExploreQuotes })(QuotesPage);
