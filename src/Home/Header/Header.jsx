import React from 'react'
import logo from './images/logo.png'
export const Header = () => {
  return (
    <>
    <header className='mt-6 container flex flex-row gap-10 justify-around items-center'>
        <img src={logo} alt="" />
        <nav>
            <ul className='flex flex-row gap-5 '>
                <li className='hover:underline cursor-pointer duration-300'>Это мы</li>
                <li className='hover:underline cursor-pointer duration-300'>Почему мы?</li>
                <li className='hover:underline cursor-pointer duration-300'>А вот поэтому</li>
                <li className='hover:underline cursor-pointer duration-300'>Контакты</li>
            </ul>
        </nav>
        <div>
            <button className='px-4 py-2 bg-[#4762FF] text-white rounded-md hover:bg-transparent hover:text-[#4762FF] border border-[#4762FF] duration-300'>
            Заказать звонок
            </button>
        </div>
    </header>
    </>
    )
}
