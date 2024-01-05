import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://images.unsplash.com/photo-1494879540385-bc170b0878a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        alt='/' 
        className='w-full h-full object-cover'
        />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Fine Your Special Trip</h1>
                <h2 className='text-2xl py-4 italic'>With A Quick Getaway</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nam sit quibusdam, 
                    consequuntur, culpa illum, officia ipsa cupiditate sapiente ea eius quasi similique 
                    voluptatibus labore modi. Enim in reiciendis doloribus.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Hero