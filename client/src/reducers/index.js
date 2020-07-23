import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { quotesReducer } from "./quotesReducer";
import { journalReducer } from "./journalReducer";

const rootReducer = combineReducers({
  user: authReducer,
  randomQuote: quotesReducer,
  journalEntry: journalReducer,
});

export default rootReducer;
