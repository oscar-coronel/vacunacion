

export const verifyLogin = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            const response = {
                token: 1232,
                user: {}
            }
            resolve( response )
        }, 3000)
    })
} 
