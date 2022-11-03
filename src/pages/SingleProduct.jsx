import React from 'react'
import moongdal from '../assets/moongdal.webp'

const SingleProduct = () => {
  return (
    <div className='flex gap-2 p-4'>
      <div className='grow bg-slate-400 m-4 h-auto flex items-center justify-center'>
          <img src={moongdal} alt="moongdal" className='' />
      </div>
      <div className='grow bg-red-300 p-12'>
          <h2 className='text-2xl font-normal m-2'>Tata Sampann Unpolished Split Yellow Moong Dal (Dhuli)</h2>
          <div className='m-2 flex gap-2'>
            <input type="radio" name="quntity" id="" />
            <span className=''>500 g</span>
            <input type="radio" name="quntity" id="" />
            <span clas>1 kg</span>
          </div>
          <div className='m-2'>
            <button className='border-2 rounded-lg border-blue-800 py-2 px-2 font-bold text-blue-800'>ADD TO CART</button>
          </div>
          <span className='m-2'>₹82</span>
          <span className='line-through text-slate-400'>₹100</span>
      </div>
    </div>
  )
}

export default SingleProduct