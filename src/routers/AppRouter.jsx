import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'


import { PageNotFound } from '../components/errors/PageNotFound'
import { Root } from '../components/root/Root'

export const AppRouter = () => {
    return <>
        <Router>
            <Routes>

                <Route path="/" element={ <Root /> } />

                <Route path="/auth/*" element={ 
                    <PublicRouter>
                        <PublicRoutes />
                    </PublicRouter>
                 } />

                <Route path="/main/*" element={ 
                    <PrivateRouter>
                        <PrivateRoutes />
                    </PrivateRouter>
                } />
                
                <Route path="*" element={ <PageNotFound /> } />

            </Routes>
        </Router>
    </>
}
