import axios from 'axios';
import { UPLOAD_FILE, FILE_ERROR, GET_FILE } from './types';

export const upload =
    (id, file, setMessage, setUploadPercentage, setErrorFlag) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                setUploadPercentage(
                    parseInt(
                        Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        )
                    )
                );

                // Clear percentage
                setTimeout(() => setUploadPercentage(0), 10000);
            },
        };

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post(`/api/upload/${id}`, formData, config);

            dispatch({
                type: UPLOAD_FILE,
                payload: res.data,
            });
            setErrorFlag(false);
            setMessage('File Uploaded');
        } catch (err) {
            dispatch({
                type: FILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
            if (err.response.status === 500) {
                setErrorFlag(true);
                setMessage('there was a problem with the server');
            } else {
                setErrorFlag(true);
                setMessage(err.response.data.msg);
            }
        }
    };

export const getFiles = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/receptionist/appeals/${id}/docs`);

        dispatch({ type: GET_FILE, payload: res.data });
    } catch (err) {
        dispatch({
            type: FILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
