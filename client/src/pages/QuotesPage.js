import React, { useContext, useEffect } from "react";

import { QuoteContext, QuoteContextProvider } from "../context/quoteContext";
import Card from "../components/Card";
import styled from "styled-components";

const QuotesPage = () => {
  const { randomQuote, fetchRandomQuote } = useContext(QuoteContext);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  console.log(randomQuote);

  return (
    <QuoteContextProvider>
      <h1>Explore</h1>

      {randomQuote && <Card quote={randomQuote} />}

      <NextQuote onClick={() => fetchRandomQuote()}>
        <i className="fa fa-arrow-right"></i>
        Next Quote
      </NextQuote>
    </QuoteContextProvider>
  );
};

export default QuotesPage;

const NextQuote = styled.button`
  border: none;
  background: none;
  margin: 1em;
  font-size: 1rem;

  .fa-arrow-right {
    margin-right: 0.5em;
  }
`;
