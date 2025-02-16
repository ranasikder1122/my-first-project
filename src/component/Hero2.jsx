import React from 'react'

const Hero2 = () => {
  return (
  <div className='h-screen flex items-center justify-center
   bg-gray-100 dark:bg-gray-900'>
    <div className='max-w-sm mx-auto p-8 bg-white rounded-xl 
    shadow-md space-y-2 sm:flex sm:items-center sm:py-4 
    sm: space py-4 sm:space-x-6' >
    <img className=' h-24 w-24 mx-auto rounded-full ring-4 
    sm:mx-0 sm:flex-shrink-0 transform hover:scale-105
    duration-500 cursor-move' src="/src/rrw.png" alt="" />
        <div className='text-center space-y-2'>
          <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>Rana Sikder (abir)</p>
          <p className='text-gray-500 font-medium'>YouTube Channel</p>
          </div>
          <button className='btn btn-button-one'>Visit now</button>
          <button className='btn btn-button-two ml-2'>website</button>
        </div>
       
    </div>
  </div>
  )
}

export default Hero2