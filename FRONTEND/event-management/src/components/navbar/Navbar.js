import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
      <div className='xl:flex bg-indigo-600 text-xl h-20 xl:items-center xl:justify-center text-white'>
            <div className='w-full xl:p-6 mx-3'>
                <h1 className='font-bold text-2xl font-sans'>{"Welcome To Daiict Events Page"}</h1>
            </div>
            <div className='w-full flex justify-end gap-9 pr-12 items-center'>
                <a href="/">Home</a>
                <a href="/allevents">Eventlist</a>
                <a href='/signup'>Sign Up</a>
                <a href="">Log Out</a>
                <a href="/profile" className='text-3xl'><FaRegUserCircle /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
