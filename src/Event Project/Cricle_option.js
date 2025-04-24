import React from "react";
import {
  Mic,
  CalendarHeart,
  MessageCircleHeart,
  Gamepad2,
  Presentation,
  Pizza,
} from "lucide-react";
import { Lightbulb, MaskHappy } from "phosphor-react";

const Cricle = () => {
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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-2 border-black bg-[#072320] gap-6 p-6">
      {LogoOption.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 border bg-slate-50 border-gray-300 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="flex justify-center items-center w-20 h-20 rounded-full border-2 border-[#0e2b18] hover:bg-[#0e2b18d7] hover:text-white transition-all duration-300">
            {item.icon}
          </div>
          <h1 className="mt-3 text-sm font-medium text-gray-800 dark:text-white">
            {item.htext}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Cricle;
