import React, { useContext } from "react";
import JournalForm from "../components/JournalForm";
import { JournalContext } from "../context/journalContext";

const JournalingPage = () => {
  const { title, content } = useContext(JournalContext);
  return (
    <div>
      <h1>Write what moves you</h1>
      <JournalForm />
    </div>
  );
};

export default JournalingPage;
