import React from 'react'

export default function GetStarted() {
  return (
    <div className='relative flex flex-row items-center justify-center gap-20 p-20 -z-50 '>
        <div className="absolute inset-0 -z-50 rounded-full bg-blue-800 opacity-30 blur-[250px]"></div>
    <div className='flex flex-col justify-center items-start gap-6'>
          <h2 className='text-4xl text-pretty font-semibold'>Get started today</h2>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
          <div className='flex flex-row items-center justify-start'><img src="loss.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>Lowest fees in market</p></div>
          <div className='flex flex-row items-center justify-start'><img src="power.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>Fast and secure transaction</p></div>
          <div className='flex flex-row items-center justify-start'><img src="lock.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>256-bit secure encryption</p></div>
    </div>
    <div className='rounded-2xl'><img src="getStarted.jpeg" alt="" className='h-auto w-[500px] rounded-3xl'/></div>
  </div>
  )
}
