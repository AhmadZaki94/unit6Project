import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "./action";


const initialState = {
    auth: false,
    token: '',
    error: false,
};

const reducer = (state = initialState, action) => {
    
    const { type, payload } = action;

    switch(type) {
        case SIGN_IN_REQUEST:
            return {
                auth: false,
                token: '',
                error: false
            };
        case SIGN_IN_SUCCESS: 
            return {
                auth: true,
                token: payload,
                error: false
            };
        case SIGN_IN_FAILURE: 
            return {
                auth: false,
                token: '',
                error: payload
            };
        default: 
            return state;
    };
};

export default reducer;