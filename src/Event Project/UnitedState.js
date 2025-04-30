import React from "react";

const UnitedState =  ({url,text}) => {
    return(
        <div className="relative w-[290px] overflow-hidden group border rounded-tl-3xl rounded-tr-3xl">
            <img src={url} className="rounded-tl-3xl rounded-tr-3xl w-full h-[200px] " alt="United State"></img>
            <p className="absolute bottom-4  left-5 z-70 font-bold text-2xl text-white">{text}</p>
            <div className="absolute left-0 bottom-0 w-full h-2 rounded-tr-lg rounded-tl-lg bg-orange-500 transition-all duration-300 ease-in-out group-hover:h-12"></div>
        </div>
    )
}
export  default UnitedState