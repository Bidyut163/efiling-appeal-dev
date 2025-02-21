import {
    FORWARD_STATUS,
    FORWARD_ERROR,
    GET_FORWARD_REMARKS,
} from '../actions/types';

const initialState = {
    forwardStatus: '',
    forwardRemarks: '',
    revertReason: '',
    isWithAppellant: '',
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FORWARD_STATUS:
            return {
                ...state,
                forwardStatus: payload.forwardStatus,
                revertReason: payload.revertReason,
                isWithAppellant: payload.isWithAppellant,
                loading: false,
            };

        case GET_FORWARD_REMARKS:
            return {
                ...state,
                forwardRemarks: payload.comments,
                loading: false,
            };

        case FORWARD_ERROR:
            return { ...state, error: payload, loading: false };

        default:
            return state;
    }
}
