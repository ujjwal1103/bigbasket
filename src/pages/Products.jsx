import React from 'react'
import { products } from '../data'

const Products = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-full z-0 '> 
      {products.map((item,index)=>{
        return(
          <div key={index} className="-z-10 flex flex-col p-4 w-60 h-80 items-center mx-2 mt-3 bg-white drop-shadow-md rounded">
          <img src={item.image} alt="" className='w-36 h-36 transition-all duration-500 ease-in-out hover:scale-[1.2]' />
          <span className='text-center text-base mt-4 w-full h-24'>{item.name}</span>
          <span>₹ {item.price} <span>M.R.F {item.price + Math.floor((item.price*10)/100)}</span></span>
          <button className=' bg-blue-500 text-white rounded-md text-base hover:bg-blue-900 px-2 py-2 ml-2 w-[90%] my-3'>Add to Cart</button>
        </div>
        )
      })}
    </div>
  )
}
export default Products