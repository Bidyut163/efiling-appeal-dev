import {
    GET_PAYMENT,
    CREATE_PAYMENT,
    PAYMENT_STATUS,
    CLEAR_PAYMENT,
    PAYMENT_ERROR,
    PAYMENT_DETAIL,
} from '../actions/types';

// const initialState = {

// }

export default function (state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PAYMENT:
            return { ...state, payment: payload };

        case CREATE_PAYMENT:
            return { ...state, order: payload };

        case PAYMENT_STATUS:
            return { ...state, status: payload };

        case PAYMENT_DETAIL:
            return { ...state, detail: payload };

        case PAYMENT_ERROR:
            return { ...state, error: payload };

        case CLEAR_PAYMENT:
            return { ...state, status: {} };

        default:
            return state;
    }
}
