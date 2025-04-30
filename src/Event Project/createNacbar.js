import React from 'react';
import Navbar from './Navbar1';
import Home from './EventMangementProject';
import About from './AboutUs/AboutUs';
import Contact from './Contact';
import CreateEvent from './CreateEvent';
import Ticket from './Ticket';
import Help from './Help';
import { Route, Routes } from 'react-router-dom'; // ⬅️ No Router import

const CreateNavbar = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/CreatedEvent' element={<CreateEvent />} />
        <Route path='/Ticket' element={<Ticket />} />
        <Route path='/Help' element={<Help />} />
      </Routes>
    </>
  );
};

export default CreateNavbar;
