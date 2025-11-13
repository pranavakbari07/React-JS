import React from 'react'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './app/store'
import CRUD from './components/CRUD'
import ApiData from './components/ApiData'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Counter /> */}
        {/* <CRUD/> */}
        <ApiData/>
      </Provider>
    </div>
  )
}
