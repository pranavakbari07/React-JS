import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reactbootstrape from './Reactbootstrape';
import Mui from './Mui';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Reactbootstrape/> */}
     <Mui/>
    </>
  )
}

export default App
