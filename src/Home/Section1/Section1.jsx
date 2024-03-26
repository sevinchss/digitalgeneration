import React from 'react'
import img1 from './images/img1.png'
export const Section1 = () => {
  return (
    <>
    <section className='mt-10'>
      <div className=' flex flex-row justify-around items-center gap-6' >
      <div className='flex flex-col gap-5 items-start justify-center px-52'>
        <h1 className='font-bold text-[60px] w-11/12'>Affordable truck service</h1>
        <p className='w-9/12 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <button className='px-4 py-2 rounded-md bg-[#4762FF] text-white hover:bg-transparent hover:text-[#4762FF] border border-[#4762FF] duration-300'>Чета сделать</button>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
      </div>
    </section>
    </>
    )
}
