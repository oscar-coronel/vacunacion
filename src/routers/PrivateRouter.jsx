import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


import { routes } from "./routes"


export const PrivateRouter = ({ children }) => {

    const { 
        auth: { uid },
    } = useSelector( state => state )

    const { login_index } = routes

    return !uid ? 
        <Navigate to={ login_index } /> :
        children
}