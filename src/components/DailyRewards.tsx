import React from 'react'

export default function DailyRewards() {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col justify-center items-start gap-6 ml-32'>
            <h2 className='text-4xl text-pretty font-semibold'>Earn daily rewards on <br /> your idle tokens</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
            <div className='flex flex-row items-center justify-start'><img src="loss.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>Lowest fees in market</p></div>
            <div className='flex flex-row items-center justify-start'><img src="power.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>Fast and secure transaction</p></div>
            <div className='flex flex-row items-center justify-start'><img src="lock.svg" alt="" className='h-auto w-7'/><p className='text-sm pl-2'>256-bit secure encryption</p></div>
      </div>
      <div><img src="Laptop21.png" alt="" className='h-[500px] w-[650px]'/></div>
    </div>
  )
}
