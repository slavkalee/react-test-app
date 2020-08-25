import { SET_USER } from "../actionTypes";

const initialState = {
    isAuth: false,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                isAuth: true,
                ...action.payload.user
            };
        default:
            return state;
    }
}