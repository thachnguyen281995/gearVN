import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative flex'>
            {/* OverLay */}
            {/* <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>GearVn</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Giao Hàng </span>Nhanh Chóng</h1>
            </div> */}
            <div className=''>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/solid1.jpg?v=30245" alt="" className='hidden xl:flex'/>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/solid2.jpg?v=30245" alt="" className='hidden xl:flex'/>
            {/* <img src="https://theme.hstatic.net/1000026716/1000440777/14/solid5.jpg?v=30245" alt="" className='hidden xl:flex'/> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9d7dF_aE5Ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <img src="https://w.ladicdn.com/s900x600/5bf3dc7edc60303c34e4991f/1-06-20221115093451-htzlj.png" alt="" className='hidden xl:flex'/>
            </div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=30245" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_2.jpg?v=30245" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_14.jpg?v=30245" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=30245" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_5.jpg?v=30245" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_6.jpg?v=30245" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=30245" alt="" /></SwiperSlide>
        
      </Swiper>
            
            
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/stk-bn-left.png?v=30245" alt="" className='hidden xl:flex'/>
        </div>
    </div>
  )
}

export default Hero