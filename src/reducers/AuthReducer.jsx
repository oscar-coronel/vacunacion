import { types } from "../types/types"

const initAuthReducer = {
    token: null,
    user: null // {}
}

export const AuthReducer = ( state = initAuthReducer, action ) => {

    const { login } = types

    switch ( login ) {
        default: 
            return state
    }

}