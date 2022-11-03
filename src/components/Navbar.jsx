import React,{useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/man.png'
import { AiOutlineSearch,AiOutlineCaretDown } from 'react-icons/ai';
import cart from '../assets/shopping-cart.png'
import { MyContext } from '../App';
import './navbar.css'

const Navbar = () => {

 

  const {loginBtn, profileDiv ,setLoginBtn ,setProfileDiv,setNavBar} = useContext(MyContext)
  const naviagte = useNavigate()
 
  
  let logout = ()=>{ 
    localStorage.clear()
    // props.login("Login")
    setLoginBtn(true)
    setProfileDiv(false)
    setNavBar(false)
    naviagte('/login')
  }
  
  
 
  return (
    <div className='z-50 w-full  h-14 px-3 flex items-center justify-between drop-shadow-md mt-2'>
         <div className="flex items-center ">
            <h1 className='text-blue-600 font-bold text-2xl '>Big Basket</h1>
         </div>
          <div className='bg-slate-50 w-1/2 p-2 rounded-md relative border flex items-center'>
              <span className=''><AiOutlineSearch className='text-xl text-slate-700'/></span>
              <input type="text" className='bg-transparent px-5 w-full' />
         </div>
            {/* {loginBtn && <li className='navbarItem'><Link to="/login" className='link'>Login</Link></li>} */}
            
            {profileDiv && <div className="flex items-center px-6">
                <div className='relative'>
                    <span className='absolute w-4 h-4 bg-blue-600 flex items-center justify-center text-sm text-white rounded-full -top-1 left-11'>2</span>
                    <Link to='/cart'><img src={cart} alt="cart" className='w-10 mx-3' /></Link>
                </div>
                <div className='group relative mx-3'>
                  <div className='flex gap-2 items-center'>
                  <img src={avatar} alt="Profile" className='w-10 border  border-slate-900 focus:bg-red-500 rounded-full'/>
                  <button className='flex items-center gap-2'> Ujjwal <AiOutlineCaretDown className='transition duration-3000 group-hover:rotate-180'/></button>
                  
                  
                   <div  className='z-50 transition-all absolute hidden duration-3000 group-hover:block  -right-3 top-12 bg-slate-100  drop-shadow-md before:content-[""] before:ml-0.5 before:p-2 before:absolute before:-top-2 before:right-3 before:rotate-45 before:bg-slate-100 '>
                    <ul className='w-36'>
                       <Link to='/profile'><li className='border-b-2 py-2 px-2 hover:bg-slate-50 mt-3'>Profile</li></Link>
                       <Link to='/Orders'><li className='border-b-2 py-2  px-2 hover:bg-slate-50'>Orders</li></Link>
                       <Link to='/About'><li className='border-b-2 py-2  px-2 hover:bg-slate-50'>About us</li></Link>
                       <Link to='/contact'><li className='border-b-2 py-2  px-2 hover:bg-slate-50'>Contact us</li></Link>
                    </ul>
                    <button onClick={logout} className=' bg-blue-500 text-white rounded-md text-base hover:bg-blue-900 px-2 py-2 ml-2 w-[90%] my-3'>Logout</button>
                </div>
                </div>
                </div> 
                


               
            </div>}
    </div>
  )
}

export default Navbar
