import React from 'react'
import { Link, useParams } from "react-router-dom";
const Li = () => {
    const {category} = useParams()
    const categorys = ["Dairy & Bakery","Fruits & Vegetables","Staples","Snacks & Branded Foods","Beverages","Home Care"]

  return (
    <ul className="flex flex-col gap-4 my-4">
    {categorys.map((item,id)=>{
        return <li key={id} className="transition duration-3000 px-5 hover:bg-slate-600 py-2 hover:text-white cursor-pointer"><Link to={`/product/:${category}`}>{item}</Link></li>
    })}
    </ul>
   
  )
}

export default Li