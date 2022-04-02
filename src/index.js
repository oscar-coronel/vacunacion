import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'


import { MainApp } from './MainApp'
//import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)


root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
)

//reportWebVitals();