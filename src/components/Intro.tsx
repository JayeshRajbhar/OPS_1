import React from 'react'

export default function Intro() {
  return (
    <div className='flex flex-row items-center justify-center my-16'>
      <div className='pl-20'>
        <h1 className='text-6xl font-bold pb-4'>Buy, trade, and <br /> hold 350+ <br /> cryptocurrencies</h1>
        <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem debitis consequatur, dolorum ratione harum, voluptatem fugit ipsa et.</p>
        <div className='flex flex-row items-center justify-start gap-10 mt-5'>
            <div className='bg-blue-500 rounded-full p-4'><button type="button">DOWNLOAD APP</button></div>
            <div className='bg-slate-800 rounded-full p-4'><button type="button">VIEW PRICING</button></div>
        </div>
      </div>
      <div className='relative rounded-md'>
      <div className="absolute inset-0 rounded-full bg-blue-900 opacity-50 blur-3xl"></div>
        <img src="laptop.png" alt="laptop" className='relative h-[500px] w-[1000px] z-10'/>
      </div>
    </div>
  )
}
