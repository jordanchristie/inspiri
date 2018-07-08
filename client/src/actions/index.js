import axios from 'axios';
import FETCH_USER from '../constants/constants';

const fetchUser = async (dispatch) => {
    const user = await axios.get('/api/user');

    dispatch({ type: FETCH_USER, payload: user.data});
}