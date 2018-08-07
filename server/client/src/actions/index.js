import axios from 'axios';
import { FETCH_USER,
         FETCH_EXPLORE_QUOTES,
         QUOTE_URL,
         SAVE_QUOTE_TO_PROFILE } from '../constants/constants';

export const fetchUser = (user) => {
    return dispatch => {
        fetch('/api/user')
            .then(res => console.log(res))
            .then(user => dispatch({ type: FETCH_USER, payload: user}))
            .catch(err => console.log(err))
    }
        
}

export const fetchExploreQuotes = () => {
    return dispatch => {
        fetch(QUOTE_URL)
            .then(res => res.json())
            .then(data => dispatch({type: FETCH_EXPLORE_QUOTES, payload: data}))
            .catch(err => console.log(err))
    } 
}

export const saveQuoteToProfile = () => {
    return dispatch => {
        axios.post('/api/saved')
            .then(data => dispatch({ type: SAVE_QUOTE_TO_PROFILE, payload: data}))
            .catch(err => console.log(err))
    }
}

export const removeQuoteToProfile = () => {
    return dispatch => {
        axios.delete('/api/saved')
            .then(data => dispatch({ type: SAVE_QUOTE_TO_PROFILE, payload: data}))
            .catch(err => console.log(err))
    }
}