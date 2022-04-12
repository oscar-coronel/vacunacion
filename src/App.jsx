import { auth } from './firebase/config'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from 'firebase/auth'


import { AppRouter } from "./routers/AppRouter"
import { login } from './actions/auth'
import { setUsersMiddleware } from './actions/users'
import { LoadingPage } from './components/loading/LoadingPage'
import { loadUser } from './helpers/loadUsers'





// Manejar petición al servidor para saber si está logeado o no
// Antes de lanzar el AppRouter, hay que verficar que sí está logeado

export const App = () => {
    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const { uid, displayName } = user
                const user_data = await loadUser( uid );
                dispatch( login({ uid, displayName, ...user_data }) )

                dispatch( setUsersMiddleware() )

            } 
            setChecking(false)
        });
    }, [dispatch, setChecking])


    if ( checking ) {
        return (
            <LoadingPage />
        )
    }
    
    return <>
        <div className="d-flex flex-column justify-content-center main">
            <AppRouter />
        </div>
    </>
}