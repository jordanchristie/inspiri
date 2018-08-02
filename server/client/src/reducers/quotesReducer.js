import { FETCH_EXPLORE_QUOTES } from '../constants/constants';

export const quotesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_EXPLORE_QUOTES:
            console.log(action.payload);
            return action.payload;
        default:
            return state
    }
}