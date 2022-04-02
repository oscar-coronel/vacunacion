import { Route, Routes, Navigate } from "react-router-dom"

import { Login } from "../components/auth/Login"



export const PublicRoutes = () => {
    return <>
        <div>
            <Routes>
                <Route path="login" element={ <Login /> } />

                <Route path="*" element={ <Navigate to="login" replace /> } />
            </Routes>
        </div>
    </>
}