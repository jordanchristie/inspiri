import React, { createContext } from "react";
import axios from "axios";

const JournalContext = createContext();

const addJournalEntry = async (entry) => {
  const res = await axios.post("/api/journal", entry);
  const { data } = await res;

  const journalEntry = data;

  return journalEntry;
};
