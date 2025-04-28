import React from "react";
import Img from "../AboutUs/Images/AboutImage.jpg";
import { Globe, Theater, Tickets } from "lucide-react";
import Footer from "../FooterEvent";
import Slider from "./Swiper"
import Navbar from "../Navbar1"

const About = () => {
  const detail = [
    {
      icon: <Globe size={36} color="black" />,
      htext: "4.7M total events in nearly 180 countries",
    },
    {
      icon: <Theater size={36} color="black" />,
      htext: "89M monthly average users",
    },
    { icon: <Tickets size={36} color="black" />, htext: "83M paid tickets" },
  ];
  
  
  return (
    <>
    <div className="sticky top-0 z-50 bg-white">
      <Navbar/>
    </div>
      <div className="w-full h-screen overflow-x-hidden">
        <div className="border border-black w-screen h-4/5 overflow-hidden relative ">
          <img src={Img} className="w-full h-full object-cover"></img>
          <h1
            className="absolute top-3/4 shadow-lg left-1/2 text-5xl transform -translate-x-1/2 -translate-y-1/2 text-gray-300 font-merriweather font-extrabold
                 text-center"
          >
            Bringing the world together through live experiences
          </h1>
        </div>
        <>
          <h2 className="text-center text-4xl p-4 m-2 mt-4 font-merriweather font-extrabold">
            2024 At A Glance
          </h2>
          <div className="grid sm:flex justify-evenly items-center p-4 gap-4">
            {detail.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-gray-400 rounded-xl hover:scale-110 transition-all duration-300 bg-slate-100 items-center border cursor-default font-normal p-4 w-56 h-40 flex flex-col justify-center"
                >
                  <span className="flex justify-center items-center mb-2">
                    {item.icon}
                  </span>
                  <h1 className="text-center font-poppins text-wrap">
                    {item.htext}
                  </h1>
                </div>
              );
            })}
          </div>
        </>
        <div>
          <>
            <h2>V3 Events & Entertainments Pvt. Ltd</h2>
            <div className="grid md:flex">
              <div className="w-1/2">
                <p>
                  V3 Events & Entertainments Pvt. Ltd.is a Delhi & Mumbai based
                  event management & wedding planning company dedicated to
                  providing customers with a wide assortment of event management
                  services for all sort of corporate and personal events. Be it
                  live shows, celebrity events, entertainment events, star
                  nights, product launches, theme parties, wedding events,
                  birthdays, fashion shows, gazal nights and many more….
                </p>
                <p>
                  Our trained and skilled event planners have the right
                  expertise to make your event more spectacular with more than
                  20 years of full-time experience in the event management &
                  Wedding Planning industry, we are serving our customers with
                  the best possible services delivered at the best possible
                  rates. We provide out of the box and innovative ideas for 100%
                  client satisfaction.
                </p>
                <p>
                  We are a one stop hub for all your event & Wedding Planning
                  related requirements. Starting from venue Selection hotels
                  booking, hospitality, decor recommendation, catering, and
                  celebrity management to entertainment options, we deal with
                  everything which is required for making your event a memorable
                  one. We at V3 conceive, arrange, execute and stylize all the
                  arrangements in a manner to help make your dream event turn
                  into reality.
                </p>
                <button>Hisar Office</button>
              </div>
              <div className="w-1/2 flex justify-center items-center pb-4 -pt-2">
                <Slider/>
              </div>
            </div>
          </>
        </div>
        <div>
      <Footer/>
      </div>
      <div className="w-full  bg-[#123431fc]">
         <p className='border-2 border-black text-normal py-2 md:py-3 lg:py-4 bg-[#123431fc] text-white text-center '>
         <span className='font-serif'>Copyright© V3 EVENTS & ENTERTAINMENTS PVT.LTD 2018,</span> 
         All right reserved.| Privacy Policy |<span className='font-serif'>Designs & Developed by Digital 360</span>
         </p>
      </div> 
      </div>
      
    </>
  );
};
export default About;
