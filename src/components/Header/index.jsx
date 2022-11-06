import React from 'react'
import { Logo } from '../../assets'
import {CgShoppingBag} from 'react-icons/cg'

const Header = () => {
  return (
    <div className='p-[1.5rem] flex '>
      <div className='flex items-center flex-1 gap-[1rem]'>
        <img className='w-[2.5rem] h-[2.5rem]' src={Logo} alt="logo" />
        <span className='font-[600]'>Amazon</span>
      </div>
      <div className='flex gap-[2rem] justify-center items-center'>
        <nav className='flex gap-[2rem] font-[500]'>
          <ul className='flex gap-[2rem] font-[500]'>
       
            {['Collections','Brands','New','Sales','ENG'].map((el,i)=>(
              <li key={i} className={`hover:text-[#fe956f] cursor-pointer`}>{el}</li>
            ))}
          </ul>
        </nav>
        <input 
          className='w-[7rem] h-[60%] outline-none border-none rounded-[5px] p-[0.5rem]' 
          type={'text'}
          placeholder="Search"
          />
        <CgShoppingBag className='w-[1.5rem] h-[1.5rem] cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header