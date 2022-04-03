import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { verifyUserLogged } from "../actions/loading"


export const useVerifyUserLogged = async ( callback ) => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( verifyUserLogged( true ) )
    
        setTimeout(() => {
            const response = {
                token: null,
                user: null
            }
            callback( response )
            dispatch( verifyUserLogged( false ) )
        }, 3000)
    }, [ dispatch, callback ])

}