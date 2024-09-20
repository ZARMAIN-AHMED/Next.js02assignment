import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className='bg-yellow-400 h-screen'>
        <h1 className='text-3xl text-black text-center bg-green-400'>
          WELCOME TO HERO SECTION
        </h1>
        <div className='flex justify-between items-center mr-60'>
          <h5 className='text-7xl m-40'>
            THIS IS MY<br /> FIRST<br />NEXT.JS<br /> PROJECT
          </h5>
          <ul className='text-3xl text-red-900'>
            <li>I hope you like my project</li>
            <li>This is my first hello world project</li>
          </ul>
        </div>
      </div>

      <div className='bg-black p-4'>
        <h1 className='text-2xl text-yellow-400 hover:text-white cursor-pointer'>
          WELCOME TO FOOTER SECTION <br />
          Contact: 03344456739
        </h1></div>
      </div>

  )}

export default Hero


