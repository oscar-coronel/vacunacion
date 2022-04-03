import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import { prefixes } from './routes'

import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'


import { PageNotFound } from '../components/errors/PageNotFound'
import { Root } from '../components/root/Root'

export const AppRouter = () => {

    const { auth, guest } = prefixes

    return <>
        <Router>
            <Routes>

                <Route path="/" element={ <Root /> } />

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
                
                <Route path="*" element={ <PageNotFound /> } />

            </Routes>
        </Router>
    </>
}
