import React from "react";

const Card = ({url,url1,text,htext,date,ptext,text1,ptext2,text2}) => {
    return(
        <div className="w-60 rounded-md border p-3">
            <img src={url} className="w-60 h-36 rounded-lg "></img>
            <div className="border rounded-lg font-medium w-28 text-center mt-2 text-wrap opacity-90 text-white m-1 mb-2  bg-[#104640] py-1 ">{text}</div>
            <h1 className="font-semibold text-lg ">{htext}</h1> 
            <p className="text-black opacity-70 font-medium">{date}</p>
            <p className="opacity-50 font-semibold">{ptext}</p>
            <p className="font-semibold">{ptext2}</p>
            <p className="text-sm">{text1}</p>
            <div className="flex items-center">
            <span className="">{url1}</span><p className="text-sm font-medium opacity-85">{text2}</p>
            </div>
        </div>
    )
}
export default Card