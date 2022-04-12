import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore"
import Swal from "sweetalert2"

import { loadUsers } from "../helpers/loadUsers"

import { types } from "../types/types"
import { db } from './../firebase/config'


// Middlewares

export const addUserMiddleware = ( data ) => {
    return async ( dispatch, getState ) => {

        const globalState = getState()
        const { uid } = globalState.auth
        
        const newUser = {
            cedula: '',
            nombres: '',
            apellidos: '',
            role: 'admin',
            email: ''
        }

        const docRef = await addDoc(collection(db, 'vacunacion', 'users', `${ uid }`), newUser)
        console.log(docRef)

        dispatch( addNewUser( { 'id': docRef.id, ...newUser } ) )

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
            auth: { uid }, 
            users: { active: user } 
        } = getState()

        const userCopy = { ...user }

        const { id: user_id } = userCopy
        delete userCopy['id']

        await setDoc(doc(db, `${ uid }`, 'journal', 'notes', `${ user_id }`), {
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

        const { uid } = getState().auth
        const { active: user } = getState().users

        await deleteDoc(doc(db, `${ uid }`, 'journal', 'notes', `${ user.id }`))
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