import { Navigate, Route, Routes } from "react-router-dom"

import { routes } from "./routes"
import { Home } from "../components/home/Home"
import { Navbar } from "../components/ui/Navbar"
import { UserFormPage } from "../components/home/UserFormPage"


export const PrivateRoutes = () => {

    const { getPrivateRoute } = routes

    return <>
        <div>

            <Navbar />

            <Routes>
                <Route path={ getPrivateRoute('home_index') } element={ <Home /> } />
                <Route path={ getPrivateRoute('user_datos') } element={ <UserFormPage /> } />

                <Route path="*" element={ <Navigate to={ getPrivateRoute('home_index') } replace /> }/>
            </Routes>
        </div>
    </>
}