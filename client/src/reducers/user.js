import {
    GET_USERS,
    USER_ERROR,
    ADD_USER,
    GET_USER,
    EDIT_USER,
    ACTIVATE_USER,
    DELETE_USER,
} from '../actions/types';

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false,
            };

        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
                loading: false,
            };

        case EDIT_USER:
            return {
                ...state,
                user: payload,
                loading: false,
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload),
                loading: false,
            };
        case ACTIVATE_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    const active = user.active;
                    return user.id === payload
                        ? { ...user, active: !active }
                        : user;
                }),
                loading: false,
            };
        case USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
