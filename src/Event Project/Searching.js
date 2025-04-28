import React, { useState } from "react";

const Searching = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showSuggestions1, setShowSuggestions1] = useState(false);

  const Loacated = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman Nicobar", "Chandigarh",
    "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Jammu & Kashmir", "Ladakh",
    "Lakshadweep", "Puducherry"
  ];

  const Event = [
    "Wedding Event", "Music Event", "Art Event", "Social Event", "Logic Event", "National Event",
    "Suggestion Event", "Grouping Event", "Technical Event", "Singing Event", "Drawing Event", "Cat Walk Event"
  ];

  const Filtered = Loacated.filter((locate) =>
    locate.toLowerCase().includes(search.toLowerCase())
  );

  const Filtered1 = Event.filter((item) =>
    item.toLowerCase().includes(search1.toLowerCase())
  );

  return (
    <div className="w-full flex justify-center mt-5 px-2">
      <div className="flex flex-col gap-4 bg-slate-100 rounded-2xl px-4 py-5 w-full max-w-lg shadow-md">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-start sm:items-stretch w-full">
          {/* Event Input */}
          <div className="relative w-full sm:w-1/2">
            <input
              type="search"
              placeholder="Search Event..."
              value={search1}
              onChange={(e) => {
                setSearch1(e.target.value);
                setShowSuggestions1(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && Filtered1.length > 0) {
                  setSearch1(Filtered1[0]);
                  setShowSuggestions1(false);
                  e.preventDefault();
                }
              }}
              className="w-full h-10 rounded-xl cursor-pointer focus:outline-none border border-gray-300 font-bold px-3"
            />
            {search1 && showSuggestions1 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl mt-1 w-full max-h-60 overflow-y-auto">
                {Filtered1.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-red-400">No Event Found...</li>
                ) : (
                  Filtered1.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearch1(item);
                        setShowSuggestions1(false);
                      }}
                    >
                      {item}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          {/* Location Input */}
          <div className="relative w-full sm:w-1/2">
            <input
              type="search"
              placeholder="Location..."
              className="w-full h-10 rounded-xl cursor-pointer focus:outline-none border border-gray-300 font-bold px-3"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && Filtered.length > 0) {
                  setSearch(Filtered[0]);
                  setShowSuggestions(false);
                  e.preventDefault();
                }
              }}
            />
            {search && showSuggestions && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl mt-1 w-full max-h-60 overflow-y-auto">
                {Filtered.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-red-400">No Location Found...</li>
                ) : (
                  Filtered.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearch(item);
                        setShowSuggestions(false);
                      }}
                    >
                      {item}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searching;
