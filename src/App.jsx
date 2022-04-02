import { AppRouter } from "./routers/AppRouter"

// Manejar petición al servidor para saber si está logeado o no
// Antes de lanzar el AppRouter, hay que verficar que sí está logeado

export const App = () => {
    return <>
        <AppRouter />
    </>
}