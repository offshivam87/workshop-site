import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../home/Home'
import Main from '../Main/Main'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/workshop" element={<Home/>} />
        

      
    </Routes>
  )
}

export default Mainroutes
