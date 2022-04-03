import { Navigate, Route, Routes } from "react-router-dom"

import { routes } from "./routes"
import { Home } from "../components/home/Home"


export const PrivateRoutes = () => {

    const { getPrivateRoute } = routes

    return <>
        <div>

            { /*NAVBAR*/ }

            <Routes>
                <Route path={ getPrivateRoute('home_index') } element={ <Home /> } />

                <Route path="*" element={ <Navigate to={ getPrivateRoute('home_index') } replace /> }/>
            </Routes>
        </div>
    </>
}