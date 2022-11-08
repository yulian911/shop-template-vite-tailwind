import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from 'swiper';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from '../../data/products';


const Slider = () => {
  return (
    <div className='relative s-container md:mt-[2rem]'>
        <Swiper
            modules={[Pagination,Navigation]}
            className=' '
            navigation={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3}
            spaceBetween={40}
            slidesPerGroup={1}
            loop={true}
            breakpoints={{
                340:{
                  slidesPerView:2
                },
                640:{
                  slidesPerView:3
                },
                820:{
                  slidesPerView:3
                },
                1023:{
                  slidesPerView:3
                }, 
                1533:{
                  slidesPerView:5
                },   
              }}
        >
                {SliderProducts.map((slide,i)=>(
                    <SwiperSlide key={i} >
                        <div className="flex flex-col justify-between ">
                            <div className="flex flex-col">
                                <span className=' text-[1.4rem] font-[600]'>{slide.name}</span>
                                <span className=' text-[0.7rem] '>{slide.detail}</span>
                            </div>
                            <span className='text-[2rem] font-bold'>{slide.price}$</span>
                            <div className=' text-[0.6rem] border-[1px] border-[var(--black)] py-[5px] px-[10px] w-[max-content] rounded-[15px]'>
                                Shop Now
                            </div>
                        </div>
                        <img src={slide.img} alt='product' className='rotate-[-20deg] absolute right-0 w-[40%] h-[100%] bottom-[-20%]'/>
                    </SwiperSlide>
                ))}

        </Swiper>

    </div>
  )
}

export default Slider