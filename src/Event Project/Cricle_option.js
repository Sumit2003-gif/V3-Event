import React, { useState } from "react";
import {
  Mic,
  CalendarHeart,
  MessageCircleHeart,
  Gamepad2,
  Presentation,
  Pizza,
} from "lucide-react";
import { Lightbulb, MaskHappy } from "phosphor-react";
import Form from "./FormEvent";

const Cricle = () => {
  const [openForm,setOpenForm] = useState(false)
  const ToggleLogin = () => setOpenForm(!openForm)
  const LogoOption = [
    { icon: <Mic size={30} />, htext: "Music" },
    { icon: <Lightbulb size={30} />, htext: "Nightlife" },
    { icon: <MaskHappy size={30} />, htext: "Performing & Visual Arts" },
    { icon: <CalendarHeart size={30} />, htext: "Holidays" },
    { icon: <MessageCircleHeart size={30} />, htext: "Dating" },
    { icon: <Gamepad2 size={30} />, htext: "Hobbies" },
    { icon: <Presentation size={30} />, htext: "Business" },
    { icon: <Pizza size={30} />, htext: "Food & Drink" },
  ];

  return (<>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-2 bg-[#f0f4f8] border-[#d1d5db] gap-6 p-6"
    onClick={ToggleLogin}>
      {LogoOption.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center text-center p-4 border bg-[#142e26] border-[#1f4033] rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
        >
          <div className="flex justify-center items-center w-20 h-20 rounded-full border-2 border-[#1f4033] bg-[#142e26] text-white group-hover:bg-white group-hover:text-[#142e26] transition-all duration-300 transform group-hover:scale-115">
            {item.icon}
          </div>
          <h1 className="mt-3 text-sm font-medium text-white">
            {item.htext}
          </h1>
        </div>
      ))}
    </div>
    {
      openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white relative p-6 rounded-lg shadow-xl">
            <button className="absolute top-2 right-2 text-slate-200 hover:text-red-500" 
            onClick={ToggleLogin}>X</button>
            <div>
              <Form/>
            </div>

          </div>
        </div>
      )
    }
    </>
  );
};

export default Cricle;
