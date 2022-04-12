import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { EmpleadoEntry } from "./EmpleadoEntry"
import { routes } from "../../routers/routes"


export const Home = () => {

    const { users } = useSelector( state => state.users )

    const navigate = useNavigate()

    const { user_datos } = routes

    const handleCreateUser = () => {
        navigate(user_datos, { 
            replace: true,
        })
    }

    return <>
        <div className="main container-fluid">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="mb-0">Empleados</h3>
                <button 
                    className="btn btn-primary btn-sm"
                    onClick={ handleCreateUser }
                >
                    Crear
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => <EmpleadoEntry key={ user.id } { ...user } user={ user } /> )
                    }
                </tbody>
            </table>
        </div>
    </>
}   