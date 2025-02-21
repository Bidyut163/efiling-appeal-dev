import axios from 'axios';
import {
    GET_USER,
    GET_USERS,
    USER_ERROR,
    ADD_USER,
    EDIT_USER,
    ACTIVATE_USER,
    DELETE_USER,
    GET_ERRORS,
} from './types';

// view current user
export const getCurrentUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/${id}`);

        dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// view a single user
export const getUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/${id}`);

        dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get List of Users
export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users');

        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Add Users
export const addUser = (formData, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post('/api/users', formData, config);

        dispatch({
            type: ADD_USER,
            payload: res.data,
        });

        history.push('/official/admin/users');
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Edit a User
export const editUser = (formData, id, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.patch(`/api/users/${id}`, formData, config);

        dispatch({
            type: EDIT_USER,
            payload: res.data,
        });

        history.push('/official/admin/users');
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// activate or deactivate a user
export const activateUser = (id) => async (dispatch) => {
    try {
        await axios.patch(`/api/users/${id}/active`);

        dispatch({
            type: ACTIVATE_USER,
            payload: id,
        });
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// delete a user
export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/users/${id}`);

        dispatch({
            type: DELETE_USER,
            payload: id,
        });
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
