import { useState } from 'react'
import {Link , NavLink} from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-4 text-lg font-bold'>react Router</h1>
      <Header/>
    </>
  )
}

export default App
