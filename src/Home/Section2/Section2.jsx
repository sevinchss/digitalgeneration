import React from 'react'


export const Section2 = () => {
  return (
    <>
    <section className='flex flex-col gap-5 mt-10 justify-around container mb-10'>
        <div className='flex flex-col justify-center items-center w-full'>
            <h1 className='font-bold text-[40px]'>Любые услуги за ваши денишки</h1>
            <p className='text-[18px] w-[500px] text-center text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
        <div className='grid grid-flow-row grid-cols-2 justify-around gap-4 w-full'>



            <div className='bg-bg1 bg-cover bg-no-repeat gap-2 h-[300px]  '>
                <div className='flex flex-col gap-3 px-10 py-12 justify-around'>
                    <h2 className='font-bold text-[24px] w-2/3 '>Б/у запчасти для грузовых авто из Европы</h2>
                    <p className='text-[16px] w-1/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
              
            </div>
            <div className='bg-bg2 bg-cover bg-no-repeat gap-2 h-[300px]  '>
                <div className='flex flex-col gap-3 px-10 py-12'>
                    <h2 className='font-bold text-[24px] w-1/2 '>Автомойка грузовых и легковых авто</h2>
                    <p className='text-[16px] w-1/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
              
            </div>
            <div className='bg-bg4 bg-cover bg-no-repeat gap-2 h-[300px]  '>
                <div className='flex flex-col gap-3 px-10 py-12'>
                    <h2 className='font-bold text-[24px] w-2/3 '>Магазин аксессуаров</h2>
                    <p className='text-[16px] w-1/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
              
            </div>
            <div className='bg-bg3 bg-cover bg-no-repeat gap-2 h-[300px]  '>
                <div className='flex flex-col gap-3 px-10 py-12'>
                    <h2 className='font-bold text-[24px] w-1/2 '>Пункт замены масла легковых авто</h2>
                    <p className='text-[16px] w-1/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
              
            </div>
           
        </div>
    </section>
    </>
    )
}
