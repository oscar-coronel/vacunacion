import { useDispatch } from "react-redux"

import { AppRouter } from "./routers/AppRouter"

import { useVerifyUserLogged } from "./hooks/useVerifyUserLogged"

import { login } from "./actions/auth"

// Manejar petición al servidor para saber si está logeado o no
// Antes de lanzar el AppRouter, hay que verficar que sí está logeado

export const App = () => {
    const dispatch = useDispatch()

    useVerifyUserLogged( response => {
        
        const { token, user } = response
        if(!!token)
            dispatch( login(token, user) )

    }).catch( console.error )
    .finally( ()=>{
    })
    
    return <>
        <AppRouter />
    </>
}