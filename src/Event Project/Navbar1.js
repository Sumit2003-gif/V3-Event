import React, { useState } from "react";
import Form from "./FormEvent";
import {
  Home,
  HelpCircle,
  Contact,
  Info,
  CalendarPlus,
  Ticket,
} from "lucide-react";
import Logo from "../Images/logo.png";

const Navbar = () => {
  const detail = [
    { id: 1, icon: <Home />, htext: "HOME" },
    { id: 2, icon: <HelpCircle />, htext: "HELP" },
    { id: 3, icon: <Contact />, htext: "CONTACT US" },
    { id: 2, icon: <Info />, htext: "ABOUT US" },
    { id: 5, icon: <CalendarPlus />, htext: "CREATE EVENTS" },
    { id: 6, icon: <Ticket />, htext: "TICKETS" },
  ];
  const [location,setLocation]= useState("")
  const Loacated = [
    "Andhra Pardesh","Arunachal Pardesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pardesh",
    "Jharkhand","Karnataka","Kerala","Madhya Pardesh","Maharastra","Manipur","Meghalya","Mizoram","Nagaland","Odisha",
    "Punjab","Rajsthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pardesh","Uttarakhand","West Bengal","Andaman Nicobar",
    "Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Dehli","Jammu & Kashmir","ladakh","Lakshadweep","Puduchery"
  ]
  const Filtered = Loacated.filter(locate=>locate.toLowerCase().includes(location.toLowerCase()))
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [openForm, setOpenForm] = useState(false);
  const ToggleLogin = () => setOpenForm(!openForm);

  return (
    <div>
      <nav className="w-full bg-[#072320] border-b-2 border-black gap-5 place-content-evenly px-4 py-2 flex  flex-nowrap md:flex-nowrap items-center justify-between shadow-md 2xl:px-20">
        <div>
          <img src={Logo} alt="Logo" className="w-20 h-20 md:w-36 md:h-24" />
        </div>

<div>
        <div className=" flex   gap-2 bg-slate-200 rounded-2xl px-2 py-1 w-1/3 items-center sm:order-2">
          <input
            type="search"
            placeholder="Search Events..."
            className="w-1/2 h-10 px-3 rounded-xl focus:outline-none border-none font-bold"
          />
          <input
            type="search"
            placeholder="Location..."
            className="w-1/2 h-10 px-3 rounded-xl focus:outline-none border-none font-bold"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
        </div>
        <div className="absolute bg-white rounded shadow-lg max-h-40 overflow-y-auto w-1/2 mt-1 z-10">
  {location &&
    (Filtered.length === 0 ? (
      <p className="text-red-600 p-2">No matching location found</p>
    ) : (
      Filtered.map((item, index) => (
        <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
          {item}
        </li>
      ))
    ))}
</div>


       </div> 

        <ul className="hidden ml-3 md:flex gap-4 items-center text-white font-semibold order-3">
          {detail.map((item) => (
            <li
              key={item.id}
              className="hover:border-b-2 border-b-slate-300 text-nowrap hover:bg-slate-200 rounded-lg px-2 py-1 hover:bg-opacity-45  cursor-pointer font-roboto"
            >
              {item.htext}
            </li>
          ))}
          <button
            className="bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-700"
            onClick={ToggleLogin}
          >
            Login
          </button>
        </ul>

        <div className="flex items-center justify-between w-full md:hidden mt-2 order-2 sm:order-none">
          <ul className="flex gap-4 text-white font-roboto">
            <li>Show Events</li>
            <li>Find Ticket</li>
            <li className="font-poppins">Login</li>
            <button onClick={toggleSidebar} className="text-white text-2xl">
              {isOpen ? "✖" : "☰"}
            </button>
          </ul>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#072320] text-white p-4 shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="flex flex-col gap-4">
            {detail.map((item) => (
              <li key={item.id} className="flex items-center gap-2 text-lg font-roboto ">
                {item.icon}
                <span>{item.htext}</span>
              </li>
            ))}
            <button
              className="mt-4 bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-700"
              onClick={ToggleLogin}
            >
              Login
            </button>
          </ul>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </nav>
      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            {/* ❌ Close Button */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            {/* Your Login Form Component */}
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
