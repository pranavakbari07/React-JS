import React from 'react'
import Nav from './Nav'
import Feature from './Feature'
import Men from './Men' 
import About from './About'
import Luxury from './Luxury'
import Blog from './Blog'
import Footer from './Footer'
import Premium from './Premium'
import Ring from './Ring'
import Card from './Card'


export default function Deshboard() {
  return (
    <>
      <Nav/>
      <Feature />
      <Card />
      <Premium />
      <Men />
      <Card/>
      <About />
      <Luxury />
      <Blog />
      <Ring/>
      <Footer />
    </>
  )
}

