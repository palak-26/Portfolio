import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'

const Portfolio = () => {
  return (
    <div className=' bg-gradient-to-r from-purple-600 via-indigo-500  to-purple-600 min-h-screen flex   items-center'>
        <NavBar/>
        <div className='flex flex-col justify-center items-center w-full'>
            <Home />
            <About/>
        </div>
        
    </div>
  )
}

export default Portfolio