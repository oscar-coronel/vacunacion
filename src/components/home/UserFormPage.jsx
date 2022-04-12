import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"

import validator from 'validator'
import Swal from 'sweetalert2'
import { signUpWithEmailAndPassword } from "../../actions/auth"
import { addUserMiddleware } from "../../actions/users"
import { useEffect } from "react"

export const UserFormPage = () => {

    const dispatch = useDispatch()

    const { active: user } = useSelector( state => state.users )

    const userData = !!user ? { ...user } : {
        cedula: '',
        nombres: '',
        apellidos: '',
        email: '',
    }

    const { id: user_id } = userData

    useEffect( () => {
        console.log(user_id);
        if( !!user_id )
            dispatch( addUserMiddleware( user_id, { ...userData } ) )
    }, [ user_id ])

    const [ newUser, handleInputChange, reset ] = useForm( userData )

    const { id, cedula, nombres, apellidos, email } = newUser
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id);
        console.log('form')

        if( 
            validator.isEmpty( cedula ) ||
            validator.isEmpty( nombres ) ||
            validator.isEmpty( apellidos ) ||
            validator.isEmpty( email ) 
        )
            Swal.fire({
                icon: 'warning',
                title: 'Todos los campos son obligatorios'
            })
        else if( !validator.isInt(cedula) || !validator.isLength(cedula, { min:10, max:10 }) ) {
            Swal.fire({
                icon: 'warning',
                title: 'La cédula debe tener 10 caracteres numéricos'
            })
        } else if ( !validator.isAlpha(nombres) ) {
            Swal.fire({
                icon: 'warning',
                title: 'El nombre solo debe tener letras'
            })
        } else if ( !validator.isAlpha(apellidos) ) {
            Swal.fire({
                icon: 'warning',
                title: 'El apellido solo debe tener letras'
            })
        } else if ( !validator.isEmail(email) ) {
            Swal.fire({
                icon: 'warning',
                title: 'Email no valido'
            })
        } else {
            if( !id ){ // CREATE USER AND EMPLOYEE
                dispatch( signUpWithEmailAndPassword(email, '123456', newUser) )
                Swal.fire({
                    icon: 'info',
                    text: 'Usuario: '+email+'; Contraseña: '+'123456'
                })
            }
        }

    }

    return (
        <div className="main container-fluid">
            
            <div className="row">
                <div className="col-4 mx-auto">

                    <form method="post" onSubmit={ handleSubmit }>
                        <h3 className="mb-3">Formulario</h3>

                        <label className="fw-bold">
                            Cedula:
                        </label>
                        <input type="text"
                            className="form-control mb-2"  
                            name="cedula"
                            value={ cedula }
                            onChange={ handleInputChange }
                        />

                        <label className="fw-bold">
                            Nombres:
                        </label>
                        <input type="text"
                            className="form-control mb-2"  
                            name="nombres"
                            value={ nombres }
                            onChange={ handleInputChange }
                        />

                        <label className="fw-bold">
                            Apellidos:
                        </label>
                        <input type="text"
                            className="form-control mb-2"  
                            name="apellidos"
                            value={ apellidos }
                            onChange={ handleInputChange }
                        />

                        <label className="fw-bold">
                            Email:
                        </label>
                        <input type="text"
                            className="form-control mb-2"  
                            name="email"
                            value={ email }
                            onChange={ handleInputChange }
                        />

                        <button
                            className="btn btn-primary btn-sm w-100"
                        >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
