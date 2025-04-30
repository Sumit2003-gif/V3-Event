import React, { useState } from "react";
import { Home, HelpCircle, Contact, Info, CalendarPlus, Ticket } from "lucide-react";
import Logo from "../Images/logo.png";
import { Logout } from "./redux login/loginSetup";
import { useDispatch, useSelector } from "react-redux";
import Searching from "./Searching";
import { Link } from "react-router-dom"; // Only import Link from react-router-dom
import Form from "./FormEvent";


const Navbar = () => {
  const detail = [
    { id: 1, icon: <Home />, htext: "HOME", path: "/" },
    { id: 4, icon: <HelpCircle />, htext: "HELP", path: "/help" },
    { id: 3, icon: <Contact />, htext: "CONTACT US", path: "/contact" },
    { id: 2, icon: <Info />, htext: "ABOUT US", path: "/about" },
    { id: 5, icon: <CalendarPlus />, htext: "CREATE EVENTS", path: "/createevent" },
    { id: 6, icon: <Ticket />, htext: "TICKETS", path: "/tickets" },
  ];

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.Login.isLogin);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [openForm, setOpenForm] = useState(false);
  const ToggleLogin = () => setOpenForm(!openForm);

  return (
    <div>
      <nav className="w-full bg-[#072320] border-b-2 border-black gap-5 place-content-evenly px-4 py-2 flex  flex-nowrap md:flex-nowrap items-center justify-evenly shadow-md 2xl:px-20">
        <div>
          <img src={Logo} alt="Logo" className="w-20 h-20 md:w-36 md:h-24" />
        </div>
        <div>
          <Searching />
        </div>
        <ul className="hidden ml-3 md:flex gap-4 items-center text-white font-semibold order-3">
          {detail.map((item) => (
            <Link key={item.id} to={item.path} style={{ marginRight: "10px" }}>
              {item.htext}
            </Link>
          ))}
          <button
            className="bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-700"
            onClick={ToggleLogin}
          >
            Login
          </button>
        </ul>

        <div className="flex items-center justify-between w-full md:hidden mt-2 order-2 sm:order-none">
          {/* <ul className="flex gap-4 text-white font-roboto"> */}
            {/* <li>Show Events</li> */}
            {/* <li>Find Ticket</li> */}
            {/* <li className="font-poppins">Login</li> */}
            <button onClick={toggleSidebar} className="text-white text-2xl">
              {isOpen ? "✖" : "☰"}
            </button>
          {/* </ul> */}
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#072320] text-white p-4 shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="flex flex-col gap-4">
            {detail.map((item) => (
              <Link key={item.id} to={item.path} className="flex items-center gap-2 text-lg font-roboto ">
                {item.icon}
                <span>{item.htext}</span>
              </Link>
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
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
