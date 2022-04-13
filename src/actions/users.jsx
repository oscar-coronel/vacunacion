import { 
    deleteUser as deleteUserAuth
} from "firebase/auth"
import { doc, setDoc, deleteDoc } from "firebase/firestore"
import { auth } from "../firebase/config"

import Swal from "sweetalert2"

import { loadUsers } from "../helpers/loadUsers"

import { types } from "../types/types"
import { db } from './../firebase/config'


// Middlewares

export const addUserMiddleware = ( uid, newUser ) => {
    return async ( dispatch ) => {
        newUser['role'] = 'empleado' 
        const newUserOrigin = { ...newUser }

        delete newUser['id']
        await setDoc(doc(db, 'users', `${ uid.toString() }`), newUser);

        dispatch( addNewUser( { 'id': uid, ...newUser } ) )
        dispatch( activeUser( uid, { ...newUserOrigin }) )
    }
}

export const setUsersMiddleware = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth
        const users = await loadUsers( uid )
        dispatch( setUsers( users ) )

    }
}

export const editUserMiddleware = () => {
    return async ( dispatch, getState ) => {

        const {
            users: { active: user } 
        } = getState()

        const userCopy = { ...user }

        const { id: user_id } = userCopy
        delete userCopy['id']

        await setDoc(doc(db, 'users', `${ user_id }`), {
            ...userCopy
        })

        dispatch( refreshUser( user_id, user ) )
        Swal.fire({
            icon: 'success',
            title: 'Usuario editado con éxito'
        })

    }
}

export const deleteUserMiddleware = () => {
    return async ( dispatch, getState ) => {

        const { active: user } = getState().users

        await deleteDoc(doc(db, 'users', `${ user.id }`))
        dispatch( deleteUser( user.id ) )
    }
}



// Actions

export const setUsers = ( users ) => 
    ({
        type: types.usersGetAll,
        payload: [ ...users ]
    })

export const activeUser = ( id, user ) =>
    ({
        type: types.usersActive,
        payload: {
            id,
            ...user
        }
    })

export const refreshUser = ( id, user ) => 
    ({
        type: types.userUpdated,
        payload: { 
            id,
            ...user
        }
    })

export const deleteUser = ( id ) => 
    ({
        type: types.usersDelete,
        payload: {
            id
        }
    })

export const addNewUser = ( user ) => 
    ({
        type: types.usersAdd,
        payload: {
            ...user
        }
    })