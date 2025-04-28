import React, { useState } from "react";
import Form from "../Event Project/FormEvent"

const CreateEvent = ({ url, heading, Desc, date }) => {
  const [openForm , setOpenForm] = useState(false)
  const ToggleLogin = () => setOpenForm(!openForm)
  
  return (<>
    <div className="w-[300px] grid border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md ">
      <div className="flex">
        <img src={url} alt="Event" className="w-24 h-24 rounded-md border border-gray-400" />
        <div className="pl-4">
          <h1 className="text-lg font-semibold text-gray-800">{heading}</h1>
          <p className="text-sm text-gray-600 mt-1" style={{fontFamily:'Open Sans ,sans-serif'}}>{Desc}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-500 mt-2 " style={{fontFamily:'Open Sans ,sans-serif'}}>{date}</p>
        <button className="bg-green-700 text-white px-3 py-1 rounded-md font-poppins hover:bg-green-800 transition"
        onClick={ToggleLogin}>
          Register
        </button>
        
      </div>

    </div>
    {openForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <button className="absolute top-2 right-2 text-gray-600 hover:text-grey-800"
              onClick={ToggleLogin}>
                X
              </button>
              <Form/>
            </div>
          </div>
        )}
   </>

  );
};

export default CreateEvent;
