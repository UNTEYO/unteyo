import React from 'react'
import './App.css'
import Landing from "./Components/Landing/Landing"
import Decor from "./Components/Landing/Decor"
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='containerAll'>
      <Header />
      <Landing />
      <Decor />
    </div>
  )
}

export default App
