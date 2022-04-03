import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


import { routes } from "./routes"
import { LoadingPage } from "../components/loading/LoadingPage"


export const PublicRouter = ({ children }) => {

    const { 
        auth: { token },
        loading: { verifyUserLogged } 
    } = useSelector( state => state )

    const { home_index } = routes

    if( verifyUserLogged )
        return <LoadingPage />

    return token === null ? 
        children :
        <Navigate to={ home_index } />
}