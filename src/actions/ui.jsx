import { types } from "../types/types";


export const onFormError = ( message ) => 
    ({
        type: types.formError,
        payload: message
    })

export const onFormSuccess = () => 
    ({
        type: types.formSuccess
    })

export const onStartLoading = () => 
    ({
        type: types.startLoading
    })

export const onFinishLoading = () => 
    ({
        type: types.finishLoading
    })