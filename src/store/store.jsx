import { 
    createStore,
    combineReducers, 
    compose, 
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import { AuthReducer } from '../reducers/AuthReducer'
import { LoadingReducer } from '../reducers/LoadingReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
    auth: AuthReducer,
    loading: LoadingReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers( applyMiddleware(thunk) )
)