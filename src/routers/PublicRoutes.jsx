import { Route, Routes, Navigate } from "react-router-dom"

import { routes } from "./routes"
import { Login } from "../components/auth/Login"


export const PublicRoutes = () => {

    const { getPublicRoute } = routes

    return <>
        <div>
            <Routes>
                <Route path={ getPublicRoute('login_index') } element={ <Login /> } />

                <Route path="*" element={ <Navigate to={ getPublicRoute('login_index') } replace /> } />
            </Routes>
        </div>
    </>
}