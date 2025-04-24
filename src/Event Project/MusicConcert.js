import React from "react";

const Music = () => {
  return (
    <div className="border-2 border-black p-4 w-96">
      <form className="grid gap-4">
        {/* First Name */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="w-32 border-2 border-black">First Name<sup className="text-red-600">*</sup></label>
          <input type="text" placeholder="Enter First Name" className="border px-1.5 py-0.5 text-sm rounded w-40" />
        </div>

        {/* Last Name */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="w-32 border-2 border-black">Last Name</label>
          <input type="text" placeholder="Enter Last Name" className="border px-1.5 py-0.5 text-sm rounded w-40" />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="w-32 border-2 border-black">Gmail Address<sup className="text-red-600">*</sup></label>
          <input type="email" placeholder="Enter Email" className="border px-1.5 py-0.5 text-sm rounded w-40" />
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="w-32 border-2 border-black">Phone Number<sup className="text-red-600">*</sup></label>
          <input type="tel" placeholder="Enter Phone Number" className="border px-1.5 py-0.5 text-sm rounded w-40" />
        </div>

        {/* Ticket Type */}
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="w-32 border-2 border-black">Ticket Type<sup className="text-red-600">*</sup></label>
          <div className="flex flex-col sm:flex-row gap-2">
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="ticket" /> Regular
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="ticket" /> VIP
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="ticket" /> Backstage
            </label>
          </div>
        </div>

        {/* Payment */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="w-32 border-2 border-black">Payment<sup className="text-red-600">*</sup></label>
          <select className="border px-1.5 py-0.5 text-sm rounded w-40">
            <option>Wallet</option>
            <option>Credit Card</option>
            <option>Net Banking</option>
            <option>Gift Card</option>
          </select>
        </div>

        {/* Requirements */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="w-32 border-2 border-black pl-1">Requirement</label>
          <textarea placeholder="Special Requirement" className="border px-1.5 py-0.5 text-sm rounded w-40 resize-none" />
        </div>

        {/* Terms */}
        <div className="flex  items-center gap-2 text-sm">
          <input type="checkbox" />
          <label>You must agree to the Terms & Conditions</label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <input 
            type="submit" 
            value="Submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default Music;
