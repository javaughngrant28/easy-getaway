import React from 'react'

function ActvityCard({image,title}) {
  return (
    <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>{title}</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src= {image}
          alt='/'
        />
      </div>
  )
}

export default ActvityCard