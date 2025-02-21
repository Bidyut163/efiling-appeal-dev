import axios from 'axios';
import {
    CREATE_CHECKLIST,
    GET_CHECKLIST,
    CHECKLIST_ERROR,
    GET_ERRORS,
} from './types';

// Create a Checklist
export const createChecklist = (formData, id, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(formData);
    try {
        const res = await axios.post(
            `/api/appeals/${id}/checklist`,
            body,
            config
        );
        dispatch({
            type: CREATE_CHECKLIST,
            payload: res.data,
        });
        history.push(`/official/login`);
    } catch (err) {
        dispatch({
            type: CHECKLIST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });

        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};

// View Checklist
export const getChecklist = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/appeals/${id}/checklist`);

        dispatch({
            type: GET_CHECKLIST,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: CHECKLIST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
