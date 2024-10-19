import React from 'react'

function Header() {
  return (
    <div className='flex flex-row items-center justify-between py-4 my-3'>
      <div className='flex flex-row items-center justify-center'>
            <div className='px-6 flex flex-row items-center'><img src="mainLogo.svg" alt="logo" className='h-[40px] px-4 ml-4' />Logo</div>
            <div className='h-[40px] w-0 border-l-[1.5px] border-gray-600 rounded'></div>
            <div className='flex flex-row gap-3 items-center justify-center px-5'>
                <div>HOME</div>
                <div>ABOUT</div>
                <div>TOKENS</div>
                <div>CONTACT US</div>
            </div>
      </div>
      <div className='bg-blue-500 rounded-full p-4 mr-16'>
        <button type="button" className=''>DOWNLOAD APP</button>
      </div>
    </div>
  )
}

export default Header