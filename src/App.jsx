import { useState } from 'react'
import './App.css'
import { Header, Hero, Products, Slider, Virtual } from './components'


function App() {


  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
    </div>
  )
}

export default App
