import { FETCH_EXPLORE_QUOTES,
         SAVE_QUOTE_TO_PROFILE,
         REMOVE_QUOTE_FROM_PROFILE } from '../constants/constants';

const initialState = { isSaved: false }

export const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXPLORE_QUOTES:
            return action.payload;
        case SAVE_QUOTE_TO_PROFILE:
            return [...state, action.payload, {isSaved: true}]
        case REMOVE_QUOTE_FROM_PROFILE:
            return [...state, action.payload]
        default:
            return state
    }
}