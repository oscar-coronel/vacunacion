import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"


import { AppRouter } from "./routers/AppRouter"

import { LoadingPage } from "./components/loading/LoadingPage"

import { verifyLogin } from "./helpers/verifyLogin"
import { login } from "./actions/auth"

// Manejar petición al servidor para saber si está logeado o no
// Antes de lanzar el AppRouter, hay que verficar que sí está logeado

export const App = () => {

    const dispatch = useDispatch()

    const [ loading, setLoading ] = useState( true )

    useEffect( () => {
        verifyLogin().then( response => {
            
            const { token, user } = response
            if(!!token)
                dispatch( login(token, user) )

        }).catch( console.error )
        .finally( ()=>{
            setLoading(false)
        })

    }, [ dispatch, setLoading ] )
    

    if ( loading ) 
        return <LoadingPage />

    return <>
        <AppRouter />
    </>
}