"use client";
import { div } from 'framer-motion/client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'

export default function LatestNews() {
  return (
  <div className='flex flex-col'>  
    <div className='flex flex-row items-center  justify-between px-16 py-14'>
    <h2 className='text-4xl text-pretty font-semibold'>Browse our latest news</h2>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eum odio nemo expedita aliquid inventore.</p>
    </div>

    <div className='flex flex-row items-center justify-evenly'>

      <div className='flex flex-col items-center justify-center w-[320px] rounded-3xl bg-slate-800 gap-5'>
        <img src="lap.jpeg" alt="" className='h-[150px] w-[500px] rounded-t-3xl'/>
        <div className='relative -top-[35px] -left-[98px] rounded-full bg-blue-500 py-[3px] px-[10px] z-10'>
        <button type="button">Products</button>
        </div>
        <h1 className='font-bold text-[20px] pl-5 -mt-10'>The Basics about Cryptocurrency</h1>
        <p className='text-wrap pl-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora, dolor id illum ipsum eius.</p>
        <div className='h-0 w-[250px] border-t-[1px] border-gray-600 blur-[1px]'></div>
        <div className='flex items-center justify-start gap-5 flex-row w-full mb-5 ml-10'>
            <div className='rounded-full'><img src="boy.jpeg" alt="" className='rounded-full h-14'/></div>
            <div>
            <h2 className='font-bold text-sm'>PRANAY SHUKLA</h2>
            <p className='text-sm'>AUGUST 13, 2024</p>
            </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-[320px] rounded-3xl bg-slate-800 gap-5'>
        <img src="lap.jpeg" alt="" className='h-[150px] w-[500px] rounded-t-3xl'/>
        <div className='relative -top-[35px] -left-[98px] rounded-full bg-blue-500 py-[3px] px-[10px] z-10'>
        <button type="button">Products</button>
        </div>
        <h1 className='font-bold text-[20px] pl-5 -mt-10'>The Basics about Cryptocurrency</h1>
        <p className='text-wrap pl-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora, dolor id illum ipsum eius.</p>
        <div className='h-0 w-[250px] border-t-[1px] border-gray-600 blur-[1px]'></div>
        <div className='flex items-center justify-start gap-5 flex-row w-full mb-5 ml-10'>
            <div className='rounded-full'><img src="boy.jpeg" alt="" className='rounded-full h-14'/></div>
            <div>
            <h2 className='font-bold text-sm'>PRANAY SHUKLA</h2>
            <p className='text-sm'>AUGUST 13, 2024</p>
            </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-[320px] rounded-3xl bg-slate-800 gap-5'>
        <img src="lap.jpeg" alt="" className='h-[150px] w-[500px] rounded-t-3xl'/>
        <div className='relative -top-[35px] -left-[98px] rounded-full bg-blue-500 py-[3px] px-[10px] z-10'>
        <button type="button">Products</button>
        </div>
        <h1 className='font-bold text-[20px] pl-5 -mt-10'>The Basics about Cryptocurrency</h1>
        <p className='text-wrap pl-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora, dolor id illum ipsum eius.</p>
        <div className='h-0 w-[250px] border-t-[1px] border-gray-600 blur-[1px]'></div>
        <div className='flex items-center justify-start gap-5 flex-row w-full mb-5 ml-10'>
            <div className='rounded-full'><img src="boy.jpeg" alt="" className='rounded-full h-14'/></div>
            <div>
            <h2 className='font-bold text-sm'>PRANAY SHUKLA</h2>
            <p className='text-sm'>AUGUST 13, 2024</p>
            </div>
        </div>
      </div>

    </div>
    <div className='flex flex-col items-center justify-center mt-8'>
    <div className='bg-blue-500 text-white py-4 px-7 rounded-full w-[210px]'><button type="button">VIEW ALL ARTICLES</button></div>
    </div>
  </div>
  )
}
