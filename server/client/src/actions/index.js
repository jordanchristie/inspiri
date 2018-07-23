import axios from 'axios';
import { FETCH_USER, FETCH_EXPLORE_QUOTES } from '../constants/constants';

export const fetchUser = (user) => {
    return dispatch => {
        axios.get('/api/user')
            .then(data => dispatch({ type: FETCH_USER, payload: user.data}));
    }    
}

export const fetchExploreQuotes = () => {
    return dispatch => {
        axios.get('http://api.forismatic.com/api/1.0/')
            .then(res => res.json())
            .then(data => dispatch({type: FETCH_EXPLORE_QUOTES, payload: data}));
    } 
}