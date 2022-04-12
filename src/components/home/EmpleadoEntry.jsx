import { useDispatch } from "react-redux"

import { activeUser, deleteUserMiddleware } from "../../actions/users"


export const EmpleadoEntry = ({
    id,
    nombres,
    apellidos,
    email,
    cedula,
    user
}) => {

    const dispatch = useDispatch()

    const handleActiveUser = () => {
        dispatch( activeUser( id, user ) )
    }

    const handleDeleteUser = () => {
        dispatch( deleteUserMiddleware( id, user ) )
    }

    return (
        <tr>
            <td>
                { cedula }
            </td>
            <td>
                { nombres }
            </td>
            <td>
                { apellidos }
            </td>
            <td>
                { email }
            </td>
            <td className="d-flex justify-content-between">
                <button
                    className="btn btn-warning btn-sm"
                    onClick={ handleActiveUser }
                >
                    Editar
                </button>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={ handleDeleteUser }
                >
                    Editar
                </button>
            </td>
        </tr>
    )
}