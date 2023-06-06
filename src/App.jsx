import { useState } from 'react'
import './hi.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function App() {

  return (
    <div>
      <div className='container'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
