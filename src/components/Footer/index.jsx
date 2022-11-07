import React from 'react'
import { Logo } from '../../assets'
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
  LogoutIcon
}from '@heroicons/react/outline'


const Footer = () => {
  return (
    <div className="w-[100%] mt-[5rem]">
      <hr className='w-[100%] h-[1px] border-none bg-white mt-[1rem] mb-[1rem]'/>
      <div className="w-[100%] flex justify-around">
        <div className="flex items-start gap-[1rem]">
          <img className='w-[2.5rem] h-[2.5rem]' src={Logo} alt='logo'/>
          <span className='font-[600] text-[1rem] '>Amazon</span>
        </div>
        <div className="flex flex-col gap-[1rem] max-w-[12rem] ">
          <div className="flex flex-col w-[inherit] text-[0.7rem] gap-[1rem] italic">
            <span className='font-[500] normal text-[1.2rem]'>Contact US</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center">
              <LocationMarkerIcon className='w-[25px]'/>
              <span>North Aveniue Orlando ,FL 32111</span>
            </span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center">
              <PhoneIcon className='w-[25px]'/>
              <a href='tel:234-234-234'>234-234-233</a>
            </span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center">
              <InboxIcon className='w-[25px]'/>
              <a href='mailto:support@shop.com'>support@shop.com</a>
            </span>
          </div>
        </div>
        {/* next block  */}
        <div className="flex flex-col gap-[1rem] max-w-[12rem] ">
          <div className="flex flex-col w-[inherit] text-[0.7rem] gap-[1rem] italic">
            <span className='font-[500] normal text-[1.2rem]'>Account</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center">
              <LogoutIcon className='w-[25px]'/>
              <span>Sign In</span>
            </span>
          </div>
        </div>
        {/* next block  */}
        <div className="flex flex-col gap-[1rem] max-w-[12rem] ">
          <div className="flex flex-col w-[inherit] text-[0.7rem] gap-[1rem] italic">
            <span className='font-[500] normal text-[1.2rem]'>Company</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center">
              <UsersIcon  className='w-[25px]'/>
              <span>About us</span>
            </span>
          </div>
        </div>
        {/* next block  */}
        <div className="flex flex-col gap-[1rem] max-w-[12rem] ">
          <div className="flex flex-col w-[inherit] text-[0.7rem] gap-[1rem] italic">
            <span className='font-[500] normal text-[1.2rem]'>Resources</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center">
              <LinkIcon className='w-[25px]'/>
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>

      </div>
      <div className='flex flex-col  w-[100%] text-center text-[o.65rem] mt-[2rem]'>
        <span>Copyright ©2022 by Shop, Inc. </span>
        <span>All right reserved</span>
      </div>
    </div>
  )
}

export default Footer