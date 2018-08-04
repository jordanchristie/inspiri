import { FETCH_EXPLORE_QUOTES, SAVE_QUOTE_TO_PROFILE } from '../constants/constants';

export const quotesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_EXPLORE_QUOTES:
            return action.payload;
        case SAVE_QUOTE_TO_PROFILE:
            return action.payload;
        default:
            return state
    }
}