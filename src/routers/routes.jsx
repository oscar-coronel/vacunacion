/*
Si no se desean prefijos, se deja un string vacio y es necesario que en las variables
private_routes y public_routes comiencen con el /
*/

const prefixes = {
    'guest': '/auth/',
    'auth': '/main/',
}

const private_routes = {
    'home_index': 'home',
    'user_datos': 'user/datos',
}

const public_routes = {
    'login_index': 'login',
}


const { guest, auth } = prefixes


for( let index in private_routes){
    private_routes[index] = auth + private_routes[index]
}

for( let index in public_routes){
    public_routes[index] = guest + public_routes[index]
}



private_routes['getPrivateRoute'] = ( key ) => {
    return private_routes[key].toString().replace(auth, '')
}

public_routes['getPublicRoute'] = ( key ) => {
    return public_routes[key].toString().replace(guest, '')
}



const routes = {
    ...private_routes,
    ...public_routes,
}


export {
    prefixes,
    routes,
}