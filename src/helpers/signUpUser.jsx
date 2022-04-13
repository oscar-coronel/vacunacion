import { createUserWithEmailAndPassword } from "firebase/auth"
import Swal from "sweetalert2"

import { auth as authSecondary } from "../firebase/secondaryConfig"


export const signUpUser = async (email, password) => {
    let response = null
    await createUserWithEmailAndPassword(authSecondary, email, password)
            .then(async (userCredential) => {
                // Signed in
                //signOut(authSecondary)
                const user = userCredential.user

                /*await updateProfile(user, {
                    displayName: name
                }).catch((error) => {
                    console.log(error.message)
                })*/

                const { uid } = user
                response = uid
            })
            .catch((error) => {
                //const errorCode = error.code
                const errorMessage = error.message
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: errorMessage,
                    confirmButtonText: 'Ok'
                })
            })
    return response
}