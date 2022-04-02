import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"



export const PublicRouter = ({ children }) => {

    const { token } = useSelector( state => state.auth )

    return token === null ? 
        children :
        <Navigate to="/home" />
}