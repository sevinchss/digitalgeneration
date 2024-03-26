import React from 'react'
import icon from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'

export const Navbar = () => {
  return (
    <>
    <section className='container flex justify-between flex-row mt-6'>
      <div className='flex flex-row gap-10'>



        <div className='flex flex-row items-center gap-3'>
            <img src={icon} alt="" />
          <div className='flex flex-col w-full text-[#717171]'>
            <p>Наш адрес:</p>
            <p className='font-medium'>г. Бишкек, ул. Ляляля 69</p>
          </div>

        </div>
        <div className='h-[50px] w-[1px] bg-[#EBEBEB]'></div>

        <div className='flex flex-row items-center gap-3 text-[#717171]'>
            <img src={icon2} alt="" />
          <div className='flex flex-col w-full'>
            <p>График работы:</p>
            <p className='font-medium'>С 8:00 до 22:00 без выходных</p>
          </div>

        </div>


      </div>
      <div>
      <div className='flex flex-row items-center gap-3 text-[#717171]'>
            <img src={icon3} alt="" />
          <div className='flex flex-col w-full'>
          <a href="tel:+7 (700) 51 51 518" className='hover:underline duration-300'>+7 (708) 51 51 518</a>
          <a href="tel:+7 (700) 51 51 518" className='hover:underline duration-300'>+7 (700) 51 51 518</a>
            
            <p></p>
          </div>

        </div>
      </div>
    </section>
    <hr  className='mt-6 container'/>
    </>
    )
}
