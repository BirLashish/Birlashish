import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import walmartlogo from "../assets/walmart.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";



const Partners = () => {
  return (
    <div className='partners max-w-full w-[95%] mx-auto'>
        <Swiper
            slidesPerView={7} 
            spaceBetween={20}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false }} 
            modules={[Navigation, Pagination, Autoplay]}
            loop={true} 
        >
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
            <SwiperSlide><img src={walmartlogo} alt="walmart" /></SwiperSlide>
        </Swiper>


        
    </div>
  )
}

export default Partners
