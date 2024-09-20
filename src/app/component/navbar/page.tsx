import React from 'react'

function NAVBAR() {
  return (
    <div className='bg-black h-14 '>
        <div className='text-yellow-400 flex justify-between items-center'>
          <h1 className='text-4xl m-2'> Navbar </h1>
        <ul className='flex gap-20 mr-7 cursor-pointer'>
          <a className='hover:text-white text-3xl' href=''>Home</a>
          <a className='hover:text-white text-3xl'href=''>About</a>
          <a className='hover:text-white text-3xl 'href=''>Contact</a>
          <a className='hover:text-white text-3xl 'href=''>Coures</a>
        </ul>
        </div>
        
    </div>
  )
}

export default NAVBAR



