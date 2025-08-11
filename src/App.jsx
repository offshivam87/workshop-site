import React from 'react'
import Home from './home/Home'
import Mainroutes from './routes/Mainroutes'
import Nav from './home/Nav'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav/>
        <Mainroutes />
      
    </div>
  )
}

export default App
