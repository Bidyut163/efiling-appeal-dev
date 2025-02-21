import { UPLOAD_FILE, GET_FILE, FILE_ERROR } from '../actions/types';

export default (state = null, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPLOAD_FILE:
            return payload;
        case GET_FILE:
            return payload;
        case FILE_ERROR:
            return payload;
        default:
            return state;
    }
};
