import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

import Image1 from "../AboutUs/Images/Slider1.jpg";
import Image2 from "../AboutUs/Images/Slider2.jpg";
import Image3 from "../AboutUs/Images/Slider3.jpg";
import Image4 from "../AboutUs/Images/Slider4.jpg";
import Image5 from "../AboutUs/Images/Slider5.jpg";
import Image6 from "../AboutUs/Images/Slider6.jpg";
import Image7 from "../AboutUs/Images/Slider7.jpg";
import Image8 from "../AboutUs/Images/Slider8.jpg";
import Image9 from "../AboutUs/Images/Slider9.jpg";
import Image10 from "../AboutUs/Images/Slider10.jpg";
import Image11 from "../AboutUs/Images/Slider11.jpg";

const Slider = () => {
  const [thumbSwiper,setThumbSwiper] = useState(null)
  const [activeindex,setActiveindex] = useState(0)
  const handleSlidesChange = (e) => {
    setActiveindex(e.realIndex)
  }
  const Images = [
    Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11
  ]

    return(
      <div className="w-3/4 p-4  ">
        <Swiper
        modules={[Thumbs,Autoplay]}
        thumbs={{swiper:thumbSwiper}}
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        loop={true}
        slidesPerView={1}
        className="mb-4"
        onSlideChange={handleSlidesChange}
        >
          {
            Images.map((image,index)=>(
                <SwiperSlide key={index}>
                  <img src={image} className="w-full h-[400px] object-cover"></img>
                </SwiperSlide>
            ))
          }
        </Swiper>

        <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbSwiper}
        slidesPerView={5}
        spaceBetween={10}
        watchSlidesProgress
        loop={true}
        className="cursor-pointer">
          {
          Images.map((item,index)=>(
            <SwiperSlide key={index}>
              <img src={item}
              className={`w-full h-20 object-cover rounded-md border-2 transition ${activeindex === index ? 'border-blue-500' : 'border-transparent'} `}
              ></img>
            </SwiperSlide>
          ))
          }
        </Swiper>
         
      </div>
    )
};

export default Slider;
