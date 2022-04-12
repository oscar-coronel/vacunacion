import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


import { routes } from "./routes"


export const PublicRouter = ({ children }) => {

    const { 
        auth: { uid },
    } = useSelector( state => state )

    const { home_index } = routes

    return !uid ? 
        children :
        <Navigate to={ home_index } />
}