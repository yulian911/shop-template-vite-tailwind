import React, { useState } from 'react'
import { Logo } from '../../assets'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {
  const [showMenu,setShowMenu]=useState(true)
  return (
    <div className='p-[1.5rem] flex '>
    {/* left column  */}
    <div className='flex items-center flex-1 gap-[1rem]'>
        {/* logo */}
        <img src={Logo} className="w-[2.5rem] h-[2.5rem] " alt='logo'/>
        <span className='font-[600]'>Amazon</span>
    </div>
    {/* left column */}
    {/* right column */}
    <div className='flex gap-[2rem] justify-center items-center md:absolute md:right-[2rem]  md:z-[999] md:bg-white md:text-[var(--black)] md:rounded-[5px] md:flex-col md:p-[1rem]'>
      {/* mobile button  */}
      <div className="hidden md:block" onClick={()=>setShowMenu(!showMenu)}>
        <GoThreeBars/>
      </div>
       {/* mobile button  */}
       {/* navigation */}
       <nav className={`flex gap-[2rem] font-[500] ${showMenu ?'md:hidden':null} `}>
        <ul className='flex gap-[2rem] font-[500] md:flex-col md:items-center '>
     
          {['Collections','Brands','New','Sales','ENG'].map((el,i)=>(
            <li key={i} className={`hover:text-[#fe956f] cursor-pointer`}>{el}</li>
          ))}
        </ul>
      </nav>
      {/* navigation */}
      {/* search input  */}
      <input 
        className='w-[7rem] h-[60%] outline-none border-none rounded-[5px] p-[0.5rem] md:hidden' 
        type={'text'}
        placeholder="Search"
        />
      {/* search input  */}
      <CgShoppingBag className='w-[1.5rem] h-[1.5rem] cursor-pointer'/>
    </div>
    {/* right column */}
  </div>
  )
}

export default Header