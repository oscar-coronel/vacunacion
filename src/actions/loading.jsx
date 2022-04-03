import { types } from "../types/types"

export const verifyUserLogged = ( newValue ) =>
    ({
        type: types.verifyUserLogged,
        payload: newValue
    })