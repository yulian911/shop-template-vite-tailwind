import React from 'react'
import { hero } from '../../assets'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'


const Mobile = () => {
  const transition ={duration:3,type:'spring',}
  return (
    <div  className='px-[2rem] grid grid-cols-[1fr,3fr,1fr]'>
      {/* left site */}
          <div className='grid grid-rows-[1fr,1fr]'>
            <span className='uppercase text-[1.5rem] w-[min-content] block font-[600] md:text-[0.9rem] '>skin protection cream</span>
            <div className='flex flex-col w-[min-content] text-black'>
                <span className='font-[800] text-[2.5rem] md:text-[1.5rem]'>
                    Trendy Collection
                </span>
                <span className='block text-left md:text-[0.9rem]'>
                    Seedily say has suitable disposal and boy.
                    <br/>
                    Exercise joy man children rejoiced.    
                </span>
            </div>
        </div>
        <div className='flex items-baseline justify-center relative'>
          {/* blue circle */}
            <motion.div 
              initial={{bottom:"2rem"}}
              whileInView={{bottom:"0rem"}}
              transition={transition}
              className='w-[30rem] h-[30rem] md:w-[20rem] md:h-[20rem]  rounded-[50%] z-[-99] absolute bottom-0 bg-gradient-to-r from-cyan-500 to-blue-500'/>
            {/* blue circle  */}
            {/* hero image */}
            <motion.img
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}
                className='w-[30rem] md:w-[20rem] absolute bottom-0' 
                src={hero} alt="hero"/>
              {/* hero image */}
              {/* cart animating  */}
            <motion.div 
              initial={{right:"4%"}}
              whileInView={{right:"2%"}}
              transition={transition}
              className='absolute bottom-[25%] md:bottom-[10%] right-[5%] 
                flex gap-[1rem] items-center'>
                <RiShoppingBagFill className='w-[60px] h-[60px] p-[10px] bg-white rounded-[50%] border-[4px] border-[var(--black)] ' />
                <div className='flex gap-[1rem] items-center bg-white rounded-[15px] shadow-[--shadow1] p-[10px] text-[.8rem]'>
                    <span className='block w-[6rem]'>Best SignUp Offers</span>
                    <div className=' w-[20px] h-[20px] rounded-[50%] border-[1px] border-[skyblue] flex items-center justify-center'>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
            {/* cart animating  */}
        </div>
        {/* Right site  */}
        <div className='grid grid-rows-[1f,1fr]'>
            <div className='flex flex-col text-right md:text-left'>
                <span className='font-[800] text-[2.5rem] md:text-[1.5rem]'>1.5m</span>
                <span className='block text-left md:text-[0.9rem]'>Monthly Traffic</span>
            </div>
            <div className='flex flex-col text-right md:text-left'>
                <span className='font-[800] text-[2.5rem] md:text-[1.5rem]'>100k</span>
                <span className='block  md:text-[0.9rem]'>Happy Customers</span>
            </div>

        </div>
    </div>
  )
}

export default Mobile