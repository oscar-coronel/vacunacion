import { useDispatch, useSelector } from "react-redux"

import { useForm } from "../../hooks/useForm"
import { signInWithEmailAndPassword } from "../../actions/auth"


export const Login = () => {
    const initFormData = {
        email: 'admin@test.com',
        password: 'administrador.',
    }


    const dispatch = useDispatch()
    const globalState = useSelector( state => state )
    const { ui: { loading } } = globalState

    const [ state, handleInputChange ] = useForm( initFormData )
    const { email, password } = state


    const handleSubmit = ( e ) => {
        e.preventDefault()

        dispatch( signInWithEmailAndPassword(email, password) )
    }

    return <>
        <div className="container-fluid bg-secondary main d-flex flex-column justify-content-center">
            <div className="row">
                <div className="col-3 mx-auto bg-dark py-3 rounded">
                    <h3 className="mb-4 text-center text-white">
                        Login
                    </h3>

                    <form method="post" onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            placeholder="Email"
                            name="email" 
                            id="email" 
                            className="form-control mb-3"
                            autoComplete="off"
                            value={ email }
                            onChange={ handleInputChange }
                        />
                        
                        <input 
                            type="password" 
                            placeholder="Password"
                            name="password" 
                            id="password" 
                            className="form-control mb-3"
                            autoComplete="off"
                            value={ password }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-sm btn-block w-100"
                            disabled={ loading }
                        >
                            Login
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </>
}