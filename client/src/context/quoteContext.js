import React, { createContext, useState } from "react";
import axios from "axios";

export const QuoteContext = createContext({});

export const QuoteContextProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({});

  async function fetchRandomQuote() {
    const res = await axios.get("/api/quotes");
    const quote = await res.data;

    setRandomQuote({ ...quote, quoteSaved: false });
  }

  async function saveQuoteToProfile(quote) {
    console.log(quote);
    const res = await axios.post("/api/quotes/add", quote);
    const { data } = res;

    return { ...data, quoteSaved: true, appMessage: "Message Saved!" };
  }

  async function removeQuoteFromProfile(id) {
    const res = await axios.delete(`/api/quote/delete/${id}`);
    const { data } = res;

    return { ...data, appMessage: "Message Deleted." };
  }

  return (
    <QuoteContext.Provider
      value={{
        randomQuote,
        fetchRandomQuote,
        saveQuoteToProfile,
        removeQuoteFromProfile,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
