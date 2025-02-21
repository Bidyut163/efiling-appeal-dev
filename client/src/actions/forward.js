import axios from 'axios';
import { FORWARD_STATUS, FORWARD_ERROR, GET_FORWARD_REMARKS } from './types';

export const revertCheck = (appealId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `/api/appellant/appeals/${appealId}/revertcheck`
        );

        dispatch({
            type: FORWARD_STATUS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: FORWARD_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// get official remarks
export const getRemarks = (appealId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `/api/registrar/appeals/${appealId}/remarks`
        );

        dispatch({
            type: GET_FORWARD_REMARKS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: FORWARD_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
