import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { routes } from "./routes"



export const PublicRouter = ({ children }) => {

    const { token } = useSelector( state => state.auth )

    const { home_index } = routes

    return token === null ? 
        children :
        <Navigate to={ home_index } />
}