import { ActionType } from "./constants"

export const setUsers = (users) => ({
    type: ActionType.SET_USERS,
    payload: users
})