import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { routes } from "./routes"



export const PrivateRouter = ({ children }) => {

    const { token } = useSelector( state => state.auth )

    const { login_index } = routes

    return token === null ? 
        <Navigate to={ login_index } /> :
        children
}