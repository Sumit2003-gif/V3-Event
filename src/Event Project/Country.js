import React from "react";
import UnitedState from "./UnitedState";
import Img from "../Images/new-york.webp"
import Img1 from "../Images/los-angeles.webp"
import Img2 from "../Images/chicago.webp"
import Img3 from "../Images/washington.webp"
import Img4 from "../Images/atlanta.webp"
import Img5 from "../Images/dallas.webp"
import Img6 from "../Images/houston.webp"
import Img7 from "../Images/san-francisco.webp"
import Img8 from "../Images/miami.webp"
import Img9 from "../Images/boston.webp"
import Img10 from "../Images/las-vegas.webp"
import Img11 from "../Images/charlotte.webp"
import Img12 from "../Images/orlando.webp"
import Img13 from "../Images/philadelphia.webp"
import Img14 from "../Images/ca--san-diego.webp"


const Countries = () => {
    const country = [
        {url:Img,text:"New York"},
        {url:Img1,text:"Los Angeles"},
        {url:Img2,text:"Chicago"},
        {url:Img3,text:"Washington"},
        {url:Img4,text:"Atlanta"},
        {url:Img5,text:"Dallas"},
        {url:Img6,text:"Houston"},
        {url:Img7,text:"San Franciso"},
        {url:Img8,text:"Miami"},
        {url:Img9,text:"Boston"},
        {url:Img10,text:"Las Vegas"},
        {url:Img11,text:"Charlotte"},
        {url:Img12,text:"Orlando"},
        {url:Img13,text:"Philadelphia"},
        {url:Img14,text:"San Diego"},

    ]
    return(
        <div className="relative grid w-full">
            <h1 className=" text-black text-2xl ml-7 font-bold  ">Top Destination in United States</h1>
        <div className="flex flex-nowrap  gap-5 p-4 mt-4 pl-10  overflow-scroll">
           
          {
            country.map((item,index)=>(
                <div key={index}>
                <UnitedState  url={item.url} text={item.text}/>
                </div>            ))

          }
        </div>
        </div>
    )
}
export default Countries