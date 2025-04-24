import React from "react";

const CreateEvent = ({ url, heading, Desc, date }) => {
  return (
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
        <button className="bg-green-700 text-white px-3 py-1 rounded-md font-poppins hover:bg-green-800 transition">
          Register
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
