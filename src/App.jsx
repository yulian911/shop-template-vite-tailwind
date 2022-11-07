import { useState } from 'react'
import './App.css'
import { Footer, Header, Hero, Products, Slider, Testimonial, Virtual } from './components'
import HeaderMobile from './components/Header/Header'
import Mobile from './components/Hero/mobile'


function App() {


  return (
    <div className="App">
      <Header/>
      <Mobile/>
      {/* <Hero/> */}
      {/* {/* <Slider/> */}
      {/* <Virtual/>
      <Products/>
      <Testimonial/>
      <Footer/>  */}
    </div>
  )
}

export default App
