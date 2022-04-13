import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

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
    const navigate = useNavigate()

    const handleActiveUser = () => {
        dispatch( activeUser( id, user ) )
        navigate('/main/user/datos', {
            replace: true
        })
    }

    const handleDeleteUser = () => {
        Swal.fire({
            icon: 'question',
            text: '¿Está seguro?',
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        }).then( result => {
            if (result.value ){
                dispatch( activeUser( id, user ) )
                dispatch( deleteUserMiddleware() )
            }
        })
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
                    Eliminar
                </button>
            </td>
        </tr>
    )
}