import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


import { routes } from "./routes"
import { LoadingPage } from "../components/loading/LoadingPage"


export const PrivateRouter = ({ children }) => {

    const { 
        auth: { token },
        loading: { verifyUserLogged } 
    } = useSelector( state => state )

    const { login_index } = routes

    if( verifyUserLogged )
        return <LoadingPage />

    return token === null ? 
        <Navigate to={ login_index } /> :
        children
}