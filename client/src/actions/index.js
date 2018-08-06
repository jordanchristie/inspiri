import axios from 'axios';
import { FETCH_USER,
         FETCH_EXPLORE_QUOTES,
         QUOTE_URL,
         SAVE_QUOTE_TO_PROFILE } from '../constants/constants';

export const fetchUser = (user) => {
    return dispatch => {
        fetch('http://localhost:5000/api/user')
        .then(dispatch({ type: FETCH_USER, payload: user}))
    }
        
}

export const fetchExploreQuotes = () => {
    return dispatch => {
        fetch(QUOTE_URL)
            .then(res => res.json())
            .then(data => dispatch({type: FETCH_EXPLORE_QUOTES, payload: data}))
    } 
}

export const saveQuoteToProfile = () => {
    return dispatch => {
        axios.post('/api/saved')
            .then(data => dispatch({ type: SAVE_QUOTE_TO_PROFILE, payload: data}))
    }
}

export const removeQuoteToProfile = () => {
    return dispatch => {
        axios.delete('/api/saved')
            .then(data => dispatch({ type: SAVE_QUOTE_TO_PROFILE, payload: data}))
    }
}