import React, { createContext, useState } from "react";
import axios from "axios";

export const QuoteContext = createContext({});

export const QuoteContextProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({});

  async function fetchRandomQuote() {
    const res = await axios.get("/api/quotes");
    const quote = res.data;

    return setRandomQuote(quote);
  }

  return (
    <QuoteContext.Provider value={{ randomQuote, fetchRandomQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
