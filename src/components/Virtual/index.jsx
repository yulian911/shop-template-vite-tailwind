import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { shade,Before, After } from '../../assets'

const Virtual = () => {
  return (
    <div className='mt-[6rem] mb-[6rem] p-[2rem] flex justify-around'>
        <div className="flex flex-col gap-[2rem] relative">
            <span className='text-[2rem] uppercase block w-[20rem] font-bold '>Virtual Try-One</span>
            <span className='text-[1.6rem] uppercase block w-[20rem] '>Never Buy the wrong Shade Again!</span>
            <span className='text-[1.6rem] font-bold'>Try Now!</span>
            <img className='absolute w-[10rem] bottom-[3rem]'  src={shade} alt='shade'/>
        </div>
        <div className="right">
            <div className='w-[30rem]'>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
        </div>
    </div>
  )
}

export default Virtual