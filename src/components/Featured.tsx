import React from 'react'

export default function Featured() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 my-[100px]'>
      <p>Finance flow has been featured on</p>
      <div className='flex flex-row items-center gap-16 justify-evenly'>
        <div className='flex flex-row items-center font-bold text-xl'><img src="SVG2.svg" alt="tick" className='h-[30px] px-2'/>Company</div>
        <div className='flex flex-row items-center font-bold text-xl'><img src="SVG2.svg" alt="tick" className='h-[30px] px-2'/>Company</div>
        <div className='flex flex-row items-center font-bold text-xl'><img src="SVG2.svg" alt="tick" className='h-[30px] px-2'/>Company</div>
        <div className='flex flex-row items-center font-bold text-xl'><img src="SVG2.svg" alt="tick" className='h-[30px] px-2'/>Company</div>
        <div className='flex flex-row items-center font-bold text-xl'><img src="SVG2.svg" alt="tick" className='h-[30px] px-2'/>Company</div>
      </div>
    </div>
  )
}
