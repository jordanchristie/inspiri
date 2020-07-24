import React, { createContext, useState } from "react";
import axios from "axios";

export const JournalContext = createContext();

export const JournalContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addJournalEntry(entry) {
    console.log(entry);
    const res = await axios.post("/api/journal", entry);
    const journalEntry = await res.data;

    return journalEntry;
  }

  return (
    <JournalContext.Provider
      value={{ title, setTitle, content, setContent, addJournalEntry }}
    >
      {children}
    </JournalContext.Provider>
  );
};
