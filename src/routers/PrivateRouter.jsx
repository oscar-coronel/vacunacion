import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"



export const PrivateRouter = ({ children }) => {

    const { token } = useSelector( state => state.auth )

    return token === null ? 
        <Navigate to="/auth/login" /> :
        children
}