import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { Provider } from 'react-redux'
import store from './Components/Common/Store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <Router />
    </Provider>
)
