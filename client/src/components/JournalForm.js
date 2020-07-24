import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../pages/LandingPage";
import { JournalContext } from "../context/journalContext";

const JournalForm = () => {
  const { title, setTitle, content, setContent, addJournalEntry } = useContext(
    JournalContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      title,
      content,
    };

    addJournalEntry(newEntry);
  };
  return (
    <form style={{ margin: "5em auto" }} onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <JournalTitle type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="Content">Content</label>
        <JournalContent
          onChange={(e) => setContent(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></JournalContent>
      </div>

      <Button as="button" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default JournalForm;

const JournalTitle = styled.input`
  font-size: 1.5rem;
  margin: 1.25em auto;
  width: 100%;
  border: none;
  border-bottom: 1px solid #333;
`;

const JournalContent = styled.textarea`
  font-size: 1.5rem;
  margin: 1.25em auto;
  width: 100%;
  border: none;
  border-bottom: 1px solid #333;
`;
