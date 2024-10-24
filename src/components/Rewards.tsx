import React from 'react'

export default function Rewards() {
  return (
    <div className='flex flex-col items-center justify-center mt-14 -mb-20'>
    <div className='flex flex-row gap-16 items-center justify-center'>
      <div><img src="Rewards2.png" alt="" className='h-[650px] w-[500px] mt-10'/></div>
      <div className='flex flex-col justify-center items-start gap-6 mb-20'>
            <h2 className='text-4xl text-pretty font-semibold'>Earn daily rewards on <br /> your idle tokens</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
            <div className='flex flex-row items-center justify-start'><img src="loss.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>Lowest fees in market</p></div>
            <div className='flex flex-row items-center justify-start'><img src="power.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>Fast and secure transaction</p></div>
            <div className='flex flex-row items-center justify-start'><img src="lock.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>256-bit secure encryption</p></div>
      </div>
    </div>
    <div className='relative w-1/3 h-[60px] flex items-start'>
    <div className="absolute inset-0 rounded bg-blue-600 opacity-100 blur-[120px] -z-50"></div>
    </div>
    </div>
  )
}
