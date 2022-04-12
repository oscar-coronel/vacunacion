import { 
    createStore,
    combineReducers, 
    compose, 
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import { AuthReducer } from '../reducers/AuthReducer'
import { uiReducer } from '../reducers/uiReducer'
import { UsersReducer } from '../reducers/UserReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
    auth: AuthReducer,
    users: UsersReducer,
    ui: uiReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers( applyMiddleware(thunk) )
)