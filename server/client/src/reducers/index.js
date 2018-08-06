import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { quotesReducer } from './quotesReducer';

const rootReducer = combineReducers({
    user: authReducer,
    randomQuote: quotesReducer
})

export default rootReducer;