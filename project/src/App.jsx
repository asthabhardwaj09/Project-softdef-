import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Herosection from './Component/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <h1 className='bg-red-500'>astha</h1>
    <>
      <Navbar />
      <Herosection />
    </>

  )
}

export default App
