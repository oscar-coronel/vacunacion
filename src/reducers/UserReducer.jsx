import { types } from "../types/types"



const initialState = {
    users: [],
    active: null
}

export const UsersReducer = ( state = initialState, action = {} ) => {
    const { usersAdd, usersActive, usersGetAll, userUpdated, usersDelete, logout } = types
    const { type, payload } = action

    switch (type) {
        case usersAdd:
            return {
                ...state,
                users: [ ...state.users, { ...payload } ],
                active: { ...payload }
            }

        case usersActive:
            return {
                ...state,
                active: {
                    ...payload
                }
            }
        
        case usersGetAll: 
            return {
                ...state,
                users: payload
            }
        
        case userUpdated:
            return {
                ...state,
                users: state.users.map( e => e.id === payload.id ? payload : e )
            }
        
        case usersDelete:
            return {
                ...state,
                users: state.users.filter( user => user.id !== payload.id ),
                active: null
            }
        
        case logout:
            return {
                ...initialState
            }
        
        default:
            return state
    }

}