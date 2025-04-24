import React, { useEffect, useRef } from "react";
import { GoogleMap,LoadScript } from "@react-google-maps/api";
import Img from "../Images/Facebook logo.png";
import Img1 from "../Images/Insta logo.png";
import Img2 from "../Images/Youtube logo.png";
import Img3 from "../Images/linkindin logo.png";
import Img4 from "../Images/twiter logo.png";

const Footer = () => {
    const container = {
    width : '100%',
    height : '400px'
    }
    const center = {
        lat : 28.6139,
        lng : 77.2090
    }
  const Images = [Img, Img1, Img2, Img3, Img4];
  const links = [
    "Home",
    "ABOUT US",
    "GALLERY",
    "BLOGS",
    "REACH US",
    "LOCATION",
    "PRIVACY & POLICY",
  ];

  return (
    <footer className="flex flex-wrap justify-evenly gap-4 p-2 md:p-6 lg:p-8 bg-gray-100 text-gray-800">
      {/* About Section */}
      <div className="w-full md:w-1/4 border p-4">
        <h1 className="text-lg font-bold mb-2 font-serif md:text-xl lg:text-2xl">V3 EVENTS</h1>
        <p className="text-sm text-justify">
          V3 Events and Entertainments Pvt Ltd is passionate about crafting
          charmingly timeless and elegant luxurious weddings and events at
          stunning venues throughout the world. As the leading wedding designers
          and event organisers in Delhi and Gurgaon, we are renowned to create
          authentic experiences worth cherishing for a lifetime.
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full md:w-1/6 border p-4">
        <h1 className="text-lg font-bold mb-2 font-serif md:text-xl lg:text-2xl">LINKS</h1>
        <div className="flex flex-col gap-1">
          {links.map((item, index) => (
            <a
              href="#"
              key={index}
              className="hover:text-blue-500 py-1 transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Contact & Map Section */}
      <div className="w-full md:w-1/4 border p-4">
        <h1 className="text-lg font-bold mb-2 font-serif md:text-xl lg:text-2xl">CONTACT US</h1>
        <p className="text-sm mb-1">
          DLF PHASE - 2 L-25/9
          <br />
          Near by Axis Bank Barwala
          <br />
          Haryana 125121
        </p>
        <p className="text-sm mb-2">Email: info@v3events.in</p>

        {/* Social Icons */}
        <div className="flex gap-2 border w-1/2 md:w-full p-2 mb-4">
          {Images.map((item, index) => (
            <img
              src={item}
              alt={`social-icon-${index}`}
              key={index}
              className="size-10"
            />
          ))}
        </div>
        </div>
        {/* Google Map */}
        <div className="border p-4 md:w-1/4">
          <h2 className="text-lg font-bold mb-2 md:text-xl lg:text-2xl font-serif">MAP LOCATION</h2>
          {/* <div ref={Mapref} className="w-full h-44 border rounded"></div> */}
          <LoadScript googleMapsApiKey="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d998.5838756904498!2d75.71911731635556!3d29.133863538449233!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745222143531!5m2!1sen!2sin">
                <GoogleMap
                mapContainerStyle={container}
                center={center}
                zoom={10}></GoogleMap>
          </LoadScript>
        </div>
      
    </footer>
  );
};

export default Footer;
