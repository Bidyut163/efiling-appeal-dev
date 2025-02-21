import axios from 'axios';
import {
    GET_PAYMENT,
    PAYMENT_DETAIL,
    CREATE_PAYMENT,
    PAYMENT_STATUS,
    CLEAR_PAYMENT,
    PAYMENT_ERROR,
} from './types';

export const createOrder = (appealId) => async (dispatch) => {
    try {
        const res = await axios.get(`/payment/createOrder/${appealId}`);

        dispatch({
            type: CREATE_PAYMENT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PAYMENT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const paymentStatus = (appealId) => async (dispatch) => {
    try {
        const res = await axios.get(`/payment/checkStatus/${appealId}`);

        dispatch({
            type: PAYMENT_STATUS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PAYMENT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const getPayment = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/payment/fetchData/${id}`);

        dispatch({
            type: GET_PAYMENT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PAYMENT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const paymentDetail = (id) => async (dispatch) => {
    try {
        const res = await axios.get(
            `/api/registrar/appeals/${id}/paymentDetail`
        );

        dispatch({
            type: PAYMENT_DETAIL,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PAYMENT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const clearPaymentStatus = () => (dispatch) => {
    dispatch({ type: CLEAR_PAYMENT });
};
