import { Navigate, Route, Routes } from "react-router-dom"

import { Home } from "../components/home/Home"


export const PrivateRoutes = () => {
    return <>
        <div>

            { /*NAVBAR*/ }

            <Routes>
                <Route path="home" element={ <Home /> } />

                <Route path="*" element={ <Navigate to="home" replace /> }/>
            </Routes>
        </div>
    </>
}