import {
    GET_APPEALS,
    GET_APPEAL,
    CREATE_APPEAL,
    UPDATE_APPEAL,
    FORWARD_APPEAL,
    REVERT_APPEAL,
    APPEAL_DATE,
    APPEAL_ERROR,
    GET_APPEALS_REGISTRAR,
    GET_APPEAL_REGISTRAR,
    GET_APPEALS_APPELLANT,
    GET_APPEAL_APPELLANT,
    SET_DATE_DOCSUB,
    GET_DATE_DOCSUB,
} from '../actions/types';

const initialState = {
    appeals: [],
    appeal: null,
    dateOfHearing: null,
    dateOfDocSub: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_APPEAL:
            return {
                ...state,
                appeal: payload,
                loading: false,
            };
        case GET_APPEAL_REGISTRAR:
        case GET_APPEAL_APPELLANT:
            return {
                ...state,
                appeal: payload,
                loading: false,
            };
        case GET_APPEALS:
            return {
                ...state,
                appeals: payload,
                loading: false,
            };
        case GET_APPEALS_REGISTRAR:
        case GET_APPEALS_APPELLANT:
            return {
                ...state,
                appeals: payload,
                loading: false,
            };
        case CREATE_APPEAL:
        case UPDATE_APPEAL:
            return {
                ...state,
                appeal: payload,
                loading: false,
            };
        case FORWARD_APPEAL:
        case REVERT_APPEAL:
            return {
                ...state,
                appeals: state.appeals.filter(
                    (appeal) => appeal.id !== payload
                ),
                loading: false,
            };

        case SET_DATE_DOCSUB:
        case GET_DATE_DOCSUB:
            return {
                ...state,
                dateOfDocSub: payload.dateOfSubmission,
            };

        case APPEAL_DATE:
            return {
                ...state,
                dateOfHearing: payload.dateOfHearing,
                loading: false,
            };

        case APPEAL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
