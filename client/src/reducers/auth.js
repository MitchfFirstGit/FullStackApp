import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.data.token);
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
                loading: false
            }

        case REGISTER_FAIL:
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            }

        default:
            return state;
    }
}