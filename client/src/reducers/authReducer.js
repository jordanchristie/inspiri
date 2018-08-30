import { FETCH_USER } from '../constants/constants';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null;
        default:
            return state;
    }
}

