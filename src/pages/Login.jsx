import { useEffect ,useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

import { MyContext } from '../App';
const Login = () => {
    const {setProfileDiv,setNavBar} = useContext(MyContext)
    const {email,setEmail} = useState(null)
    const {password,setPassword} = useState(null)
    const navigate = useNavigate()
    const login = (email,password)=>{
      const user = {email :email,password:password}
      console.log(user);
      if(!user){
        navigate('/login')
      }
    }
   
return (
    <div className="w-screen bg-red-300 h-screen">
        <form action="" className="lg:w-1/2  bg-slate-300 lg:m-auto lg:mt-20 mt-10 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold text-center">Login</h2>
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <input type="email" className="border" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
          <label htmlFor="passowrd">Password</label>
          <input type="password" className="border" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div>
          <button onClick={()=>{login(email,password)}} className=' bg-blue-500 text-white rounded-md text-base hover:bg-blue-900 px-2 py-2 ml-2 w-[90%] my-3'>Login</button>
          </div>
        </form>
    </div>
  )
}

export default Login