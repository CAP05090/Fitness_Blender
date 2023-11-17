import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Bottom from './Components/bottom'
import FrontPage from './Components/FrontPage'
import FbPass from './Components/fbPlus'
import Program from './Components/Program'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <FrontPage />
      <FbPass />
      <Program />
      <Bottom />
    </>
  )
}

export default App
