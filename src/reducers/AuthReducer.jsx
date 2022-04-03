import { types } from "../types/types"

const initAuthReducer = {
    token: null,
    user: null // {}
}

export const AuthReducer = ( state = initAuthReducer, action ) => {

    const { type, payload } = action
    
    const { login } = types

    switch ( type ) {
        case login:
            return {
                ...state,
                ...payload
            }

        default: 
            return state
    }

}