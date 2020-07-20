import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExploreQuotes } from "../actions/index";
import Card from "../components/Card";
import styled from "styled-components";

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

        <NextQuote href="/quotes">
          <i className="fa fa-arrow-right"></i>
          Next Quote
        </NextQuote>
      </div>
    );
  }
}

const mapStateToProps = ({ randomQuote }) => {
  return { randomQuote };
};

export default connect(mapStateToProps, { fetchExploreQuotes })(QuotesPage);

const NextQuote = styled.a`
  margin: 1em;

  .fa-arrow-right {
    margin-right: 0.5em;
  }
`;
