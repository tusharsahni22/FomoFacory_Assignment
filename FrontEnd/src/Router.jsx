import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Dashboard from './Components/Dashboard'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router