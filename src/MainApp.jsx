import { Provider } from 'react-redux'
import { App } from './App'


import { store } from './store/store'

export const MainApp = () => {
    return <>
    
        <Provider store={ store }>
            <App />
        </Provider>
    
    </>
}