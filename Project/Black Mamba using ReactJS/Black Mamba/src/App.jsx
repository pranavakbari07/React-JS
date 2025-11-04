import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Card from './Components/Card'
import Features from './Components/feature'
import Premium from './Components/Premium'
import Men from './Components/Men'
import About from './Components/About'
import Luxury from './Components/Luxury'
import Blog from './Components/Blog'
import Ring from './Components/Ring'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Features/>
      <Card />
      <Premium />
      <Men />
      <Card />
      <About />
      <Luxury />
      <Blog />
      <Ring />
      <Footer />
    </>
  )
}

export default App
