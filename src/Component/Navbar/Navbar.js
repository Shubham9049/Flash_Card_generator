import React from 'react'
import Logo from "../Navbar/logo.png"

const Navbar = () => {
  return (
    <div className='h-14 w-screen fixed z-50 bg-white dark:bg-[#1e2125] flex items-center space-between drop-shadow-md'>
            <div className='flex items-center font-medium text-3xl'>
                <img className='h-10 my-auto ml-4' src={Logo} alt="AlmaBetter" />
                <span>maBetter</span>
            </div>
        </div>
  )
}

export default Navbar   
