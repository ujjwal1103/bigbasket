import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-amber-50 shadow-sm flex w-full ">
    <img src={logo} className="w-48 pt-3 pl-3 pb-3" alt="BigBasket"/>
    <div className='bg-slate-200 flex justify-start items-center p-4 w-96'>
        <input type="text" className='px-2 py-1 border-none w-full rounded' />
    </div>
    </nav>
  )
}

export default Navbar