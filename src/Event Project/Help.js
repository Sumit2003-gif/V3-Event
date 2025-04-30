import React from 'react'
import Navbar from './Navbar1'
import Footer from './FooterEvent'
import { Search } from 'lucide-react'
const Help = () => {
  return (
    <>
        <div className='sticky top-0 z-50'>
             <Navbar/>
        </div>
        <div className='w-full '>
            <div className=' flex flex-col border place-content-center border-slate-200 p-14 m-5 bg-slate-50'>
                <h1 className='text-5xl font-playfair font-extrabold text-center m-2'>How can we help?</h1>
                <div className='flex border gap-5 place-content-center border-black rounded-lg justify-evenly items-center w-1/4 max-w-md mx-auto p-4 m-5 '>
                    <span><Search size={20}/></span>
                    <input type='search' className='w-full outline-none' placeholder='Search....'></input>
                </div>
            </div>
            <>
            <div>
                <button>Attending an Event</button>
                <button>Organizing an Event</button>
            </div>
            <div>
                <div>
                <span></span>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <button>Log In</button>
                </div>

            </div>
            <div>
                <h1>Featured Article</h1>
                <div>
                    cards
                </div>
            </div>
            <div>
                <h1>Browse by topic</h1>
            </div>
            <div>
                <h1>Still have question?</h1>
                <button>Contact us</button>
            </div>
            </>
            <Footer/>
            <div>
                <p className='border-2 border-black text-normal py-2 md:py-3 lg:py-4 bg-[#123431fc] text-white text-center '>
                <span className='font-serif'>Copyright© V3 EVENTS & ENTERTAINMENTS PVT.LTD 2018,</span> 
                All right reserved.| Privacy Policy |<span className='font-serif'>Designs & Developed by Digital 360</span>
                </p>
            </div> 
        </div>

    </>
  )
}

export default Help
