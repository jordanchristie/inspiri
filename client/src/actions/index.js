import axios from "axios";
import {
  SAVE_QUOTE_TO_PROFILE,
  REMOVE_QUOTE_FROM_PROFILE,
  ADD_JOURNAL_ENTRY,
} from "../constants/constants";

export const saveQuoteToProfile = (quote) => {
  return async (dispatch) => {
    const res = await axios.post("/api/quotes/add");
    const quote = res.data;

    dispatch({ type: SAVE_QUOTE_TO_PROFILE, payload: quote }).catch((err) =>
      console.log(err)
    );
  };
};

export const removeQuoteFromProfile = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`/api/quotes/remove/${id}`);
    const quote = res.data;

    dispatch({ type: REMOVE_QUOTE_FROM_PROFILE, payload: quote }).catch((err) =>
      console.log(err)
    );
  };
};

export const addJournalEntry = (entry) => {
  return async (dispatch) => {
    const res = await axios.post("/api/journal");
    const entry = res.data;

    return dispatch({ type: ADD_JOURNAL_ENTRY, payload: entry }).catch(
      (err) => {
        console.log(err);
      }
    );
  };
};
