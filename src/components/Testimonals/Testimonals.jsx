import React from 'react'
import './testimnals.css'
import { Data } from './Data'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from 'swiper/modules';

const Testimonals = () => {
  return (
   <section className="testimonal container section" id='portfolio'>
    <h2 className="section_title">My clients say</h2>
    <span className="section_subtitle">Testimonals</span>

    <Swiper className="testimonal_container"
    loop={true}
    grabCursor={true}
    spaceBetween={24}
    pagination={{
      clickable:true, 
    }}
    breakpoints={{
      576:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:2,
        spaceBetween:48,
      },
    }}
    modules={[Pagination]}
    >
        {Data.map(({id,image,title,description})=>{
          return (
            <SwiperSlide className="testimonal_card" key={id}>
              <img src={image} alt="" className='testimonal_img' />

              <h3 className="testimonal_name">{title}</h3>
              <p className="testimonal_description">{description}</p>
            </SwiperSlide>
          )
        })}
    </Swiper>   


   </section>
  )
}

export default Testimonals
