import React, { useContext } from "react";
import { QuoteContext } from "../context/quoteContext";
import styled from "styled-components";

const Card = ({ quote }) => {
  const { quoteAuthor, quoteText, quoteSaved, _id } = quote;
  const { saveQuoteToProfile, removeQuoteFromProfile } = useContext(
    QuoteContext
  );
  return (
    <CardWrapper>
      <Content>
        <Author>{quoteAuthor}</Author>
        <Quote>{quoteText}</Quote>
      </Content>
      <Actions>
        {quoteSaved ? (
          <SaveToggle onClick={() => removeQuoteFromProfile(_id)}>
            <i className="fa fa-times center"></i>
            Remove Quote
          </SaveToggle>
        ) : (
          <SaveToggle
            onClick={() => saveQuoteToProfile({ quoteAuthor, quoteText })}
          >
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
};

export default Card;

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
