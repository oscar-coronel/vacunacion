import { types } from "../types/types"


export const AuthReducer = ( state = {}, action = {} ) => {
    const { login, logout } = types

    const { type, payload } = action

    switch ( type ) {

        case login:
            return {
                ...payload
            }
        
        case logout:
            return {}

        default:
            return state

    }
}