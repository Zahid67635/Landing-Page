import { useState } from 'react'
import './hi.css'
import Navbar from './Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar></Navbar>
    </div>
  )
}

export default App
