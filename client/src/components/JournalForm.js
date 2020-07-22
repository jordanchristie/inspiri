import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../pages/LandingPage";

const JournalForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    const newEntry = {
      title,
      content,
    };
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

      <Button>Submit</Button>
    </form>
  );
};

export default JournalForm;

const JournalTitle = styled.input`
  margin: 3em auto;
  width: 100%;
  border: none;
  border-bottom: 1px solid #333;
`;

const JournalContent = styled.textarea`
  margin: 3em auto;
  width: 100%;
  border: none;
  border-bottom: 1px solid #333;
`;
