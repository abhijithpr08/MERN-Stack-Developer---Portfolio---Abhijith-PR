import React from 'react'

const MobileNav = () => {
  return (
    <div>
        {/* overlay */}
        <div className='fixed inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black
        opacity-70 w-full h-screen'></div>
        {/* navlinks */}
        <div className='text-white fixed justify-center flex flex-col h-full transform transition-all
        duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-'></div>
    </div>
  )
}

export default MobileNav