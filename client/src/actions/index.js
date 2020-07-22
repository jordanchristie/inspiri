import axios from "axios";
import {
  FETCH_USER,
  FETCH_EXPLORE_QUOTES,
  SAVE_QUOTE_TO_PROFILE,
  REMOVE_QUOTE_FROM_PROFILE,
} from "../constants/constants";

export const fetchUser = (user) => {
  return (dispatch) => {
    axios
      .get("/api/user", { withCredentials: "include" })
      .then((res) => res.data)
      .then((user) => dispatch({ type: FETCH_USER, payload: user }))
      .catch((err) => console.log(err));
  };
};

export const fetchExploreQuotes = () => {
  return (dispatch) => {
    axios
      .get("/api/quotes")
      .then((res) => res.data)
      .then((data) => dispatch({ type: FETCH_EXPLORE_QUOTES, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const saveQuoteToProfile = (quote) => {
  return (dispatch) => {
    axios
      .post("/api/quotes/add", quote)
      .then((data) => dispatch({ type: SAVE_QUOTE_TO_PROFILE, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const removeQuoteFromProfile = (id) => {
  return (dispatch) => {
    axios
      .delete(`/api/quotes/remove/${id}`)
      .then((data) =>
        dispatch({ type: REMOVE_QUOTE_FROM_PROFILE, payload: data })
      )
      .catch((err) => console.log(err));
  };
};

export const addJournalEntry = (entry) => {
  return (dispatch) => {
    axios.post(`/api/journal/add`);
  };
};
