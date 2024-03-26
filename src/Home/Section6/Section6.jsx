import React from 'react'

export const Section6 = () => {
  return (
    <>
    <section className='bg-bg5 bg-cover bg-no-repeat mt-16  '>
        <div className='flex '>
    <div className='flex flex-col gap-5 bg-white w-[611px] h-[548px] rounded-md container mt-20 px-8 pt-6 ml-[700px] mb-10'>
        <h1 className='font-bold text-[56px] w-10/12'>Остались вопросы?</h1>
        <p className='text-[18px] w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <div className='flex flex-col gap-3 items-start w-full'>
            <input type="text" placeholder='Имя' className='w-full py-3 border px-2 border-[#F1F3FF] bg-[#F1F3FF] text-[#979797] rounded-md'/>
            <input type="text" placeholder='Номер телефона' className='w-full py-3 border border-[#F1F3FF] px-2 bg-[#F1F3FF] text-[#979797] rounded-md' />
            <button className='w-full text-center py-3 border border-[#4762FF] px-2 bg-[#4762FF] text-white rounded-md'>Отправить</button>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}
