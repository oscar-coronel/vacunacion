import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../actions/auth"


export const Navbar = () => {

    const dispatch = useDispatch()

    const globalState = useSelector( state => state )
    const { auth: { nombres, apellidos } } = globalState

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return <>
        <div className="navbar navbar-dark bg-dark mb-4 px-3">
            <span className="navbar-brand">
                { nombres } { apellidos }
            </span>

            <button className="btn btn-outline-danger" onClick={ handleLogout }>
                <span>Logout</span>
            </button>
        </div>   
    </>
}