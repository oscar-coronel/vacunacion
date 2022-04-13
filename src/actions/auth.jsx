import { 
    signInWithEmailAndPassword as SignInWithEmailAndPassword,
    signOut,
    deleteUser
} from "firebase/auth"
import Swal from 'sweetalert2'

import { types } from "../types/types"
import { auth } from "../firebase/config"


import { onStartLoading, onFinishLoading } from './ui';
import { loadUser } from "../helpers/loadUsers";


// MIDDLEWARES
export const signInWithEmailAndPassword = (email, password) => {
    return ( dispatch ) => {
        dispatch( onStartLoading() )
        SignInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user
                
                const { uid, displayName } = user

                const user_data = await loadUser( uid );

                dispatch( login({ uid, displayName, ...user_data }) )
            })
            .catch((error) => {
                //const errorCode = error.code
                const errorMessage = error.message
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: errorMessage,
                    confirmButtonText: 'Ok'
                })
            })
            .finally( () => {
                dispatch( onFinishLoading() )
            })
    
    }
}

/*
export const signUpWithEmailAndPassword = (email, password, newUser) => {
    return ( dispatch ) => {
        createUserWithEmailAndPassword(authSecondary, email, password)
            .then(async (userCredential) => {
                // Signed in
                signOut(authSecondary)
                const user = userCredential.user

                /*await updateProfile(user, {
                    displayName: name
                }).catch((error) => {
                    console.log(error.message)
                })

                newUser['role'] = 'empleado'
                const { uid } = user
                dispatch( activeUser(uid, newUser) )

                //dispatch( login( uid, displayName ) )
            })
            .catch((error) => {
                //const errorCode = error.code
                const errorMessage = error.message
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: errorMessage,
                    confirmButtonText: 'Ok'
                })
            })
    }
}*/

export const startLogout = () => {
    return ( dispatch ) => {
        signOut(auth).then( ()=>{
            dispatch( logout() )
        })
        .catch( (error) => {
            console.log( error )
        })
    }
}


// ACTIONS
export const login = (data) =>
    ({
        type: types.login,
        payload: {
            ...data
        }
    })

export const logout = () => 
    ({
        type: types.logout
    })