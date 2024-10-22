import React from 'react'

export default function Download() {
  return (
    <div className='flex flex-col mt-14'>
      <div className='flex flex-row items-center  justify-evenly py-14'>
            <h2 className='text-4xl text-pretty font-semibold'>Download our app</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
      </div>
        <div className='flex flex-row justify-evenly'>
      <div className='flex flex-col items-start justify-end w-auto rounded-3xl bg-slate-800 gap-5 px-10 pt-10'>
        <h2 className='text-4xl text-pretty font-semibold'>Download our app</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
        <div className='rounded-full bg-blue-500 py-[15px] px-[20px] z-10  flex flex-row my-4'>
        <img src="apple.svg" alt="" className='bg-transparent h-6'/>
        <button type="button">PLAY STORE</button>
        </div>
        <div className='flex flex-row items-center justify-center w-full'>
        <img src="phone.png" alt="" className=' rounded-t-[50px] w-auto'/>
        </div>
      </div>

      <div className='flex flex-col items-start justify-end w-auto rounded-3xl bg-slate-800 gap-5 px-10 pt-10'>
        <h2 className='text-4xl text-pretty font-semibold'>Download our app</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
        <div className='rounded-full bg-blue-500 py-[15px] px-[20px] z-10  flex flex-row my-4'>
        <img src="play.svg" alt="" className='bg-transparent h-6'/>
        <button type="button">PLAY STORE</button>
        </div>
        <div className='flex flex-row items-center justify-center w-full'>
        <img src="phone.png" alt="" className=' rounded-t-[50px] w-auto'/>
        </div>
      </div>
      </div>
    </div>
  )
}
