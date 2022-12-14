import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialHero} from '../../assets'
import { TestimonialsData } from '../../data/testimonials'


const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[4rem] px-[2rem] ">
      <div className="grid items-end w-[100%] grid-cols-[1fr,2fr,1fr] ">
        {/* left */}
        <div className="flex flex-col gap-[1rem]">
          <span className='text-[2rem] uppercase block font-bold xs:text-[1rem]'>Top Rated</span>
          <span className='text-[0.8rem] block xs:text-[0.6rem]'>Seedily say suitable disposal and boy.<br/> Exercise joy man children rejoiced.</span>
        </div>
        {/* middle */}
        <img className='w-[25rem] md:w-[20rem] justify-self-center' src={testimonialHero} alt='hero'/>
        {/* right */}
        <div className="flex flex-col justify-start text-right">
          <span className='text-[2rem] uppercase block font-bold xs:text-[1rem]'>100k</span>
          <span className='text-[0.8rem]  block xs:text-[0.6rem]'>Happy Customers with us</span>
        </div>
      </div>
    
      <div className='text-[2rem] uppercase font-bold xs:text-[1rem]'>
        Reviews
      </div>
        {/* carusel  */}
      <div className="w-[100%]">
          <Swiper
                // modules={[Pagination,Navigation]}
                className='p-[2rem]'
                // navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                  340:{
                    slidesPerView:1
                  },
                  640:{
                    slidesPerView:1
                  },
                  820:{
                    slidesPerView:2
                  },
                  1023:{
                    slidesPerView:3
                  },
                  1279:{
                    slidesPerView:4
                  },
                  
                }}
            >
              {TestimonialsData.map((testimonial,i)=>(
                <SwiperSlide key={i}>
                    <div className="flex flex-col relative bg-white rounded-[0.5rem] justify-center items-center p-[1rem] gap-[1rem] shadow-[0rem,1rem,3rem,-50px #7d7d7d]">
                      <img  className='absolute w-[3rem] top-[-1.5rem] left-[45%]' src={testimonial.image} />
                      <span className='text-[0.8rem ] tracking-[1px] mt-[2rem]'>{testimonial.comment}</span>
                      <hr className='h-[1px] w-[80%] bg-[rgb(198,198,198)] border-none'/>
                      <span className='font-[500]'>{testimonial.name}</span>
                    </div>
                </SwiperSlide>
              ))}
          </Swiper>
      </div>
     
    </div>
  )
}

export default Testimonial