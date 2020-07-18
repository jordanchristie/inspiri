import React from "react";
import styled from "styled-components";

const JournalForm = () => {
  return (
    <form style={{ margin: "5em auto" }}>
      <label htmlFor="Title">Title</label>
      <JournalTitle type="text" />

      <label htmlFor="Content">Content</label>
      <textarea
        className="materialize-textarea"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </form>
  );
};

export default JournalForm;

const JournalTitle = styled.input`
  margin: 3em auto;
`;
