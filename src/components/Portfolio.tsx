import React from 'react'

export default function Portfolio() {
  return (
    <div className='flex flex-col items-center justify-center px-[100px] mt-[140px] w-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-bold mb-5'>Build your crypto portfolio</h2>
        <p className='text-center text-wrap w-[400px] text-sm'>Lorem ipsum dolor. My name is Om chillure and i am a world class frontend developer (i.e. NO COMPETITION)</p>
      </div>

      <div className='flex flex-row items-center justify-center gap-5 mt-16'>

        <div className='flex flex-col h-full gap-6 w-1/2'>
            <div className='flex flex-col p-4 rounded-3xl items-start justify-center bg-gray-700'>
                <img src="sendReceive.svg" alt="send receive" className='h-20 ml-7'/>
                <h3 className='mt-2 ml-4 text-xl font-bold'>SEND & RECEIVE</h3>
                <p className='mt-2 ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minus cumque distinctio quisquam facere debitis quis aspernatur inventore sapiente reiciendis!</p>
            </div>
            <div className='flex flex-col p-4 rounded-3xl items-start justify-center bg-gray-700'>
                <img src="wallet.svg" alt="send receive" className='h-20 ml-7'/>
                <h3 className='mt-2 ml-4 text-xl font-bold'>SEND & RECEIVE</h3>
                <p className='mt-2 ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minus cumque distinctio quisquam facere debitis quis aspernatur inventore sapiente reiciendis!</p>
            </div>
        </div>

        <div className='flex flex-col rounded-3xl bg-blue-400 h-[630px]'>
            <h2 className='mt-10 ml-10 text-xl font-bold'>IOS & ANDROID APP</h2>
            <p className='mt-4 mx-10 text-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil tenetur officia atque illo dolore.</p>
            <img src="mobile.png" alt="mobile" className='h-[480px]'/>
        </div>

        <div className='flex flex-col h-full gap-6 relative w-1/2' >
            <div className="absolute inset-0 rounded-full bg-blue-900 opacity-50 blur-3xl"></div>
            <div className='flex flex-col p-4 flex-grow rounded-3xl items-start justify-center bg-gray-700'>
                <img src="loop.svg" alt="send receive" className='h-20 ml-7'/>
                <h3 className='mt-2 ml-4 text-xl font-bold'>SEND & RECEIVE</h3>
                <p className='mt-2 ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minus cumque distinctio quisquam facere debitis quis aspernatur inventore sapiente reiciendis!</p>
            </div>
            <div className='flex flex-col p-4 flex-grow rounded-3xl items-start justify-center bg-gray-700'>
                <img src="chart.svg" alt="send receive" className='h-20 ml-7'/>
                <h3 className='mt-2 ml-4 text-xl font-bold'>SEND & RECEIVE</h3>
                <p className='mt-2 ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minus cumque distinctio quisquam facere debitis quis aspernatur inventore sapiente reiciendis!</p>
            </div>
        </div>

      </div>
    </div>
  )
}
