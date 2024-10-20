import React from 'react'

export default function Possibilities() {
  return (
    <div className='flex flex-row items-center justify-center w-full h-[400px] mt-32 bg-gradient-to-b from-blue-400 to-blue-600'>
      <div className='flex flex-col justify-center items-start gap-6 ml-28'>
            <h2 className='text-3xl text-pretty font-semibold'>Explore endless possibilities with crypto</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
            <div className='flex flex-row items-center justify-start bg-white text-blue-500 py-4 px-7 rounded-full'><button type="button">DOWNLOAD APP</button></div>
      </div>
      <div><img src="Rewards3.png" alt="" className='h-[418px] w-[850px] -mt-5'/></div>
    </div>
  )
}
