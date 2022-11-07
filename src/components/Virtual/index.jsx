import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { shade,Before, After } from '../../assets'

const Virtual = () => {
  return (
    <div className='mt-[6rem] mb-[6rem] p-[2rem] flex justify-around md:flex-col md:items-center md:justify-center md:gap-[2rem]'>
        <div className="flex flex-col gap-[2rem] relative">
            <span className='text-[2rem] uppercase block w-[20rem] font-bold xs:text-[1rem] '>Virtual Try-One</span>
            <span className='text-[1.6rem] uppercase block w-[20rem] xs:text-[0.8rem] '>Never Buy the wrong Shade Again!</span>
            <span className='text-[1.6rem] font-bold xs:text-[0.8rem]'>Try Now!</span>
            <img className='absolute w-[10rem] bottom-[3rem] md:bottom-[-2rem]'  src={shade} alt='shade'/>
        </div>
        <div className="right">
            <div className='w-[30rem] xs:w-[20rem]'>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
        </div>
    </div>
  )
}

export default Virtual