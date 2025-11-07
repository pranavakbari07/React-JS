import React, { createContext } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Counter from './components/Counter'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './components/About'

export const themeContext = createContext()

export default function App() {
  return (
    <div>
      {/* <h1>This is the component tree</h1>
      <BrowserRouter>
      <themeContext.Provider value={"light"}>
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
        </Routes>
      </themeContext.Provider>
      </BrowserRouter> */}

      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  )
}