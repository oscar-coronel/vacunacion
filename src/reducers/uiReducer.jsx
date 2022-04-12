import { types } from './../types/types'

const initialState = {
    loading: false,
    errorMessage: null,
}

export const uiReducer = ( state = initialState, action = {} ) => {
    const { formError, formSuccess, startLoading, finishLoading } = types

    const { type, payload } = action

    switch ( type ) {
        case formError:
            return {
                ...state,
                errorMessage: payload
            }
        
        case formSuccess:
            return {
                ...state,
                errorMessage: null
            }
        
        case startLoading:
            return {
                ...state,
                loading: true
            }

        case finishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }

}