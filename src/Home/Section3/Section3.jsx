import React from 'react'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
export const Section3 = () => {
  return (
    <>
    <section className='container mt-32 flex flex-row justify-around px-6 gap-5 items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[48px] font-bold w-2/3'>У вас вопрос кто мы а кто мы блин</h1>
        <div className='flex flex-col gap-2'>
        <p className='text-[18px] w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <p className='text-[18px] w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <p className='text-[18px] w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <p className='text-[18px] w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
      </div>
      <div className='flex flex-col gap-16 items-center justify-center'>
        <div className='flex flex-row gap-[15rem]'>
          <img src={img1} alt="" className='h-[101.99px] w-[175.75px]'/>
          <img src={img2} alt="" className='h-[101.99px] w-[175.75px]' />
        </div>
        <div >
          <img src={img3} alt="" className='h-[101.99px] w-[175.75px]'/>
        </div>
        <div className='flex flex-row gap-[15rem] '>
          <img src={img4} alt="" className='h-[90.99px] w-[175.75px]'/>
          <img src={img5} alt="" className='h-[101.99px] w-[175.75px]'/>
        </div>
      </div>
    </section>
    </>
  )
}
