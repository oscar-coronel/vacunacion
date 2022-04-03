import { types } from "../types/types"


export const login = (token, user) => 
    ({
        type: types.login,
        payload: {
            token,
            user
        }
    })