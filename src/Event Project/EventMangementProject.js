// import logo from './logo.svg';
// import './App.css';
import '@fontsource/roboto'
import Navbar from './Navbar1.js';
import MySlider from './SliderImages';
import Cricle from './Cricle_option';
import CreatedEvent from './Events crearted';
import Footer from './FooterEvent';
import Work  from './Work';
// import Video from './VideoEvent';
import Video from "./VideoEvent.js"
import Test from './DehliEvent';
// import UnitedState from './UnitedState';
// import img from "./Tech Confrenece.jpg"
import Countries from './Country.js';
function Event() {

  return (
    <div >
      <Navbar/>
      <MySlider/>
      <div className="text-center py-6 bg-white">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
    Welcome to <span className="font-bold text-black">V3events</span> – 
    <span className="text-gray-700"> Best Wedding & Event Management Company in Delhi NCR</span>
  </h1>
  <p className="mt-2 text-base md:text-lg text-gray-600" style={{ fontFamily: 'Playfair Display, serif' }}>
    V3 Events & Weddings – Award Winning Wedding Planners & Event Management Company
  </p>
</div>

      <Work/>      
      <CreatedEvent/>
      <Cricle/>
      <Test/>
      <Countries/>
      <Video />
      <Footer />
      <div>
         <p className='border-2 border-black text-normal py-2 md:py-3 lg:py-4 bg-[#123431fc] text-white text-center '>
         <span className='font-serif'>Copyright© V3 EVENTS & ENTERTAINMENTS PVT.LTD 2018,</span> 
         All right reserved.| Privacy Policy |<span className='font-serif'>Designs & Developed by Digital 360</span>
         </p>
      </div> 
    </div>

  );
}

export default Event;
