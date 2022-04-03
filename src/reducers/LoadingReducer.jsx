import { types } from "../types/types"

const initLoadingReducer = {
    verifyUserLogged: true,
    //...
}

export const LoadingReducer = ( state = initLoadingReducer, action ) => {

    const { type, payload } = action

    const { verifyUserLogged } = types

    switch ( type ) {
        case verifyUserLogged:
            return {
                ...state,
                verifyUserLogged: payload
            }
    
        default:
            return state
    }
}