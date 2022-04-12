import { useState } from "react"

const useForm = ( formData ) => {

    const [ formState, setFormState ] = useState( formData )

    const reset = () => {
        setFormState( formData )
    }

    const handleInputChange = ( event ) => {
        const { target: { value: newValue}} = event
        setFormState( (oldData) => {
            return { 
                ...oldData, 
                [event.target.name]: newValue
            }
        } )
    }

    return [
        formState,
        handleInputChange,
        reset,
    ]

}

export {
    useForm
}