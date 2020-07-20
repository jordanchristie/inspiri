import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { saveQuoteToProfile, removeQuoteFromProfile } from "../actions/index";

class Card extends Component {
  saveQuote = (e) => {
    const { author, quote } = this.props;
    this.props.saveQuoteToProfile({
      author,
      quote,
    });
  };

  removeQuote = (e) => {
    const id = this.props._id;
    this.props.removeQuoteFromProfile(id);
  };

  render() {
    const { author, quote, isSaved } = this.props;
    return (
      <CardWrapper>
        <Content>
          <Author>{author}</Author>
          <Quote>{quote}</Quote>
        </Content>
        <Actions>
          {isSaved ? (
            <SaveToggle onClick={this.removeQuote}>
              <i className="fa fa-times center"></i>
              Remove Quote
            </SaveToggle>
          ) : (
            <SaveToggle onClick={this.saveQuote}>
              <i className="fa fa-plus center"></i>
              Save Quote
            </SaveToggle>
          )}
          <Social>
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-twitter"></i>
            </li>
          </Social>
        </Actions>
      </CardWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveQuoteToProfile: () => dispatch(saveQuoteToProfile(ownProps)),
    removeQuoteFromProfile: (id) => dispatch(removeQuoteFromProfile(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);

const CardWrapper = styled.section`
  background: #455a64;
  color: #fff;
  padding: 1.5rem;
`;

const Content = styled.article``;

const Author = styled.span`
  font-size: 1.5rem
  font-style: italic;
  font-weight: 300;
`;

const Quote = styled.p`
  font-size: 2rem;
`;

const Actions = styled.article`
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SaveToggle = styled.p`
  cursor: pointer;

  i.fa-plus {
    margin-right: 0.5em;
  }
`;

const Social = styled.ul`
  width: 10%;
  cursor: pointer;

  li {
    display: inline;
    margin: 1em;
    font-size: 1.25rem;
  }
`;
