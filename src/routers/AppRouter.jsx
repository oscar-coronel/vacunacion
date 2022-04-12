import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

import { prefixes } from './routes'

import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'


export const AppRouter = () => {

    const { auth, guest } = prefixes

    return <>
        <Router>
            <Routes>
                
                <Route path={ `${ guest }*` } element={ 
                    <PublicRouter>
                        <PublicRoutes />
                    </PublicRouter>
                 } />

                <Route path={ `${ auth }*` } element={ 
                    <PrivateRouter>
                        <PrivateRoutes />
                    </PrivateRouter>
                } />
                
                <Route path="*" element={ <Navigate to="/auth/login" /> } />

            </Routes>
        </Router>
    </>
}
