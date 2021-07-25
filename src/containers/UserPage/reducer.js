import { ActionType } from "./constants";

const defaultState = {
    user: null
}

export default function userPageReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionType.SET_USER:
            return {...state, user: action.payload}    
        default:
            return state
    }
}