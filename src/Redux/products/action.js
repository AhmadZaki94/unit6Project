import axios from 'axios';
import * as types from './actionTypes';

const fetchDataRequest = (payload) => {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData = (payload)  => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get('https://prodapi.herokuapp.com/products', {
            params: {
                ...payload,
            },
        })
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)));
    };
}


export { fetchData };

