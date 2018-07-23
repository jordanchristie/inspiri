import axios from 'axios';
import { FETCH_USER, FETCH_EXPLORE_QUOTES } from '../constants/constants';

export const fetchUser = async (dispatch) => {
    const user = await axios.get('/api/user');

    dispatch({ type: FETCH_USER, payload: user.data});
}

export const fetchExploreQuotes = async(dispatch) => {
    const res = await axios.get('http://api.forismatic.com/api/1.0/');
    const data = await res.json();

    dispatch({type: FETCH_EXPLORE_QUOTES, payload: data})
        

}