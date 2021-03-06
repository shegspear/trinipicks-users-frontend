import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
} from '../../Constants/UserAuthConst/UserSignupConst';

export const userSignupReducer = (
    state = {},
    action
) => {
    switch(action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading: true};
        case USER_SIGNUP_SUCCESS:
            return {loading: false, response: action.payload};
        case USER_SIGNUP_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    };
};