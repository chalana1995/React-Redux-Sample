import { ActionType } from "./constants";

const defaultState = {
    users: []
};

export default function homePageReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionType.SET_USERS:
            return {...state, users: action.payload}
        default:
            return state;
    }
}