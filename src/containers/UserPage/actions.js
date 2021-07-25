import { ActionType } from "./constants";

export const setUser = (user) => ({
    type: ActionType.SET_USER,
    payload: user
})