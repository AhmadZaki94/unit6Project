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
        axios.get('/products', {
            params: {
                ...payload,
            },
        })
        .then((r) => {
            if(payload.type.length === 0 || payload.type[0] === undefined)
            {
                dispatch(fetchDataSuccess(r.data));
            }
            else{
                let data = r.data.filter((e) => {
                
                    return payload.type.find((el) => {
                        return el === e.type;
                    });
                })
                dispatch(fetchDataSuccess(data));
            }
            // console.log("DATA:",r.data, "payload",payload.type);
        })
        .catch((e) => dispatch(fetchDataFailure(e.data)));
    };
}

const getSingleProductRequest = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const getSingleProductFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    };
};

const getSingleProduct = (id) => (dispatch) => {
    dispatch(getSingleProductRequest())
    axios.get(`/products/${id}`)
    .then(r => dispatch(getSingleProductSuccess(r.data)))
    .catch(e => dispatch(getSingleProductFailure(e.data)))
}

const addProductCartRequest = (payload) => {
    return { 
        type: types.ADD_PRODUCT_CART_REQUEST,
        payload
    };
};

const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_SUCCESS,
        payload
    };
};

const addProductCartFailure = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_FAILURE,
        payload
    };
};

const addProductCart = (product) => (dispatch) => {
    dispatch(addProductCartRequest());
    axios.post('/cart', product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
};




export { fetchData, getSingleProduct, addProductCart };

