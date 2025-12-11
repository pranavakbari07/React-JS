import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './Pages/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/home' Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
