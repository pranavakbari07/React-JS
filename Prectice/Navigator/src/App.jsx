import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Cart from './pages/Cart'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
