import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { quotesReducer } from './quotesReducer';

const rootReducer = combineReducers({
    loggedIn: authReducer,
    randomQuote: quotesReducer
})

export default rootReducer;