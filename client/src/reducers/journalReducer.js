import { ADD_JOURNAL_ENTRY } from "../constants/constants";

export const journalReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_JOURNAL_ENTRY:
      console.log("reducer touched!");
      return action.payload;
    default:
      return state;
  }
};
