import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast'
import Deshboard from './components/Deshboard'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/deshboard' element={<Deshboard />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Toaster position="top-right" />
        </BrowserRouter>
      </CartProvider>
    </>
    
  )
}
