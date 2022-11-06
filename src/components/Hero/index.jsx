import React from 'react'
import { hero } from '../../assets'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='px-[2rem] grid grid-cols-[1fr,3fr,1fr]'>
        {/* left site */}
        <div className='grid grid-rows-[1fr,1fr]'>
            <span className='uppercase text-[1.5rem] w-[min-content] block font-[600] '>skin protection cream</span>
            <div className='flex flex-col w-[min-content] text-black'>
                <span className='font-[800] text-[2.5rem] '>
                    Trendy Collection
                </span>
                <span className='block text-left'>
                    Seedily say has suitable disposal and boy.
                    <br/>
                    Exercise joy man children rejoiced.    
                </span>
            </div>
        </div>
        {/* middle site */}
        <div className='flex items-baseline justify-center relative'>
            <div className='w-[30rem] h-[30rem] rounded-[50%] z-[-99] absolute bottom-0 bg-gradient-to-r from-cyan-500 to-blue-500'/>
            <img
                className='w-[30rem] absolute bottom-0' 
                src={hero} alt="hero"/>
            <div className='absolute bottom-[25%] right-[5%] flex gap-[1rem] items-center'>
                <RiShoppingBagFill className='w-[60px] h-[60px] p-[10px] bg-white rounded-[50%] border-[4px] border-[var(--black)] ' />
                <div className='flex gap-[1rem] items-center bg-white rounded-[15px] shadow-[--shadow1] p-[10px] text-[.8rem]'>
                    <span className='block w-[6rem]'>Best SignUp Offers</span>
                    <div className=' w-[20px] h-[20px] rounded-[50%] border-[1px] border-[skyblue] flex items-center justify-center'>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
        {/* Right site  */}
        <div className='grid grid-rows-[1f,1fr]'>
            <div className='flex flex-col text-right'>
                <span className='font-[800] text-[2.5rem]'>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className='flex flex-col text-right'>
                <span className='font-[800] text-[2.5rem]'>100k</span>
                <span>Happy Customers</span>
            </div>

        </div>
    </div>
  )
}

export default Hero