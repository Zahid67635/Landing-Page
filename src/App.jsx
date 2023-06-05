import { useState } from 'react'
import './hi.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  )
}

export default App
