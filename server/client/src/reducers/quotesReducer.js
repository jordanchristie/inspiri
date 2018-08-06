import { FETCH_EXPLORE_QUOTES,
         SAVE_QUOTE_TO_PROFILE,
         REMOVE_QUOTE_FROM_PROFILE } from '../constants/constants';



export const quotesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_EXPLORE_QUOTES:
            return action.payload;
        case SAVE_QUOTE_TO_PROFILE:
            return {
                ...state,
                
            };
        case REMOVE_QUOTE_FROM_PROFILE:
            return {
                ...state,
                
            };
        default:
            return state
    }
}