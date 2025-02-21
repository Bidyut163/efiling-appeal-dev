import axios from 'axios';

import {
    APPEAL_ERROR,
    GET_APPEALS,
    GET_APPEAL,
    APPEAL_DATE,
    CREATE_APPEAL,
    UPDATE_APPEAL,
    FORWARD_APPEAL,
    GET_APPEALS_REGISTRAR,
    GET_APPEAL_REGISTRAR,
    GET_APPEALS_APPELLANT,
    GET_APPEAL_APPELLANT,
    SET_DATE_DOCSUB,
    GET_DATE_DOCSUB,
    REVERT_APPEAL,
} from './types';

// Get List of Appeals with Receptionist
export const getAppeals = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/receptionist/appeals');

        dispatch({
            type: GET_APPEALS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get a single appeal
export const getAppeal = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/receptionist/appeals/${id}`);

        dispatch({
            type: GET_APPEAL,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Create an appeal
export const createAppeal = (formData, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.post(
            '/api/appellant/appeals',
            formData,
            config
        );
        dispatch({
            type: CREATE_APPEAL,
            payload: res.data,
        });
        history.push(`/appellant/appeals/${res.data.id}/payment`);
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Update an appeal
export const updateAppeal = (formData, history, id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.patch(
            `/api/appellant/appeals/${id}`,
            formData,
            config
        );
        dispatch({
            type: UPDATE_APPEAL,
            payload: res.data,
        });
        history.push(`/appellant/dashboard`);
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Forward appeal to registrar
export const forwardToRegistrar =
    (comments, id, history) => async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            await axios.put(
                `/api/receptionist/appeals/${id}/forward`,
                comments,
                config
            );

            dispatch({
                type: FORWARD_APPEAL,
                payload: id,
            });

            history.push('/official/receptionist/appeals');
        } catch (err) {
            dispatch({
                type: APPEAL_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    };

// Get List of Appeals with Registrar
export const getAppealsWithRegistrar = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/registrar/appeals');

        dispatch({
            type: GET_APPEALS_REGISTRAR,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get a single appeal with registrar
export const registrarGetAppeal = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/registrar/appeals/${id}`);

        dispatch({
            type: GET_APPEAL_REGISTRAR,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get List of Appeals by an Appellant
export const getAppealsAppellant = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/appellant/appeals');

        dispatch({
            type: GET_APPEALS_APPELLANT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get a single Appeal by an Appellant
export const appellantGetAppeal = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/appellant/appeals/${id}`);

        dispatch({
            type: GET_APPEAL_APPELLANT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Set Date for document submission
export const setDateForDocSub = (dateOfSubmission, id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.post(
            `/api/registrar/appeals/${id}/setdatedoc`,
            dateOfSubmission,
            config
        );

        dispatch({
            type: SET_DATE_DOCSUB,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Set Date for document submission
export const getDateForDocSub = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/registrar/appeals/${id}/getdatedoc`);

        dispatch({
            type: GET_DATE_DOCSUB,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Forward appeal to bench by registrar
export const forwardToBench = (benchdate, id, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        await axios.put(
            `/api/registrar/appeals/${id}/forward`,
            benchdate,
            config
        );

        dispatch({
            type: FORWARD_APPEAL,
            payload: id,
        });

        history.push('/official/registrar/bench');
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get List of Appeals in Bench
export const getAppealsBench = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/registrar/bench');

        dispatch({
            type: GET_APPEALS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get date of hearing of appeal
export const getDateOfHearing = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/appellant/appeals/${id}/getdate`);

        dispatch({
            type: APPEAL_DATE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Revert Appeal to receptionist
export const revertAppeal = (formData, id, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        await axios.patch(
            `/api/registrar/appeals/${id}/revert`,
            formData,
            config
        );

        dispatch({
            type: REVERT_APPEAL,
            payload: id,
        });

        history.push('/official/registrar/appeals');
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
