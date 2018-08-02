import { FETCH_EXPLORE_QUOTES } from '../constants/constants';

export const quotesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_EXPLORE_QUOTES:
            return action.payload;
        default:
            return state
    }
}