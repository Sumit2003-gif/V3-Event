import logo from './logo.svg';
// import './App.css';
import '@fontsource/roboto'
import React from 'react'
import EventMangementProject from './Event Project/EventMangementProject'
import Searching from './Event Project/Searching';
import CreateEvent from './Event Project/Event_total';
import CreatedEvent from './Event Project/Events crearted';
import About from './Event Project/AboutUs/AboutUs';
import Slider from './Event Project/AboutUs/Swiper';
const App = () => {
  return (
    <div>
      {/* <Slider/> */}
      {/* <About/> */}
      <EventMangementProject/>
      {/* <Searching/> */}
      {/* <CreatedEvent/> */}
    </div>
  )
}

export default App

