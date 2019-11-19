import axios from 'axios';
import { Dispatch, Action } from 'redux';
import { setNotification } from './notification';
import setAuthToken from '../utills/setAuthToken';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './constants';

export const loadUser = () => async (dispatch: Dispatch<Action> ) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const register = (name: string, email: string, password: string) => async (dispatch: Dispatch<any>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            data: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error: {msg: string}) => dispatch(setNotification(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        })
    }
};


export const login = (email: string, password: string) => async (dispatch: Dispatch<any>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            data: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error: {msg: string}) => dispatch(setNotification(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        })
    }
};