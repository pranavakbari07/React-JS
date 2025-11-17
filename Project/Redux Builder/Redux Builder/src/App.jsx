import React from 'react'
import ApiData from './components/ApiData.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'

export default function App() {
  return (
    <div className="min-h-screen">
      <Provider store={store}>
        <ApiData/>
      </Provider>
    </div>
  )
}
