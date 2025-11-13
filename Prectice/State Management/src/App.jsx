import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const themeContext = createContext()

export default function App() {
  return (
    <div>
      <h1>This is a component tree</h1>
      <BrowserRouter>
        <themeContext.Provider value={"light"}>
          <Routes>
            <Route path='/' Component={home} />
            <Route path='/about' Component={about} />
          </Routes>
        </themeContext.Provider>
      </BrowserRouter>
    </div>
  )
}
