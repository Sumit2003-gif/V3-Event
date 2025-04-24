// import React, { useRef, useState } from "react";
// import { User, Send, Lock, KeyRound } from "lucide-react";

// const Form = () => {
//   const [error, setError] = useState({});

//   const Nameref = useRef(null);
//   const Emailref = useRef(null);
//   const Passwordref = useRef(null);
//   const Confirmref = useRef(null);
//   const Agreeref = useRef(null);

//   const CreateButton = (e) => {
//     e.preventDefault();

//     const name = Nameref.current.value.trim();
//     const email = Emailref.current.value.trim();
//     const password = Passwordref.current.value.trim();
//     const confirm = Confirmref.current.value.trim();
//     const agree = Agreeref.current.checked;

//     const newError = {};

//     // Name validation
//     if (!name) newError.name = "Username is compulsory";

//     // Email validation
//     if (!email) newError.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newError.email = "Invalid Email";
//     }

//     // Password validation
//     if (!password) newError.password = "Password is required";
//     else if (
//       !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
//     ) {
//       newError.password =
//         "Password must be at least 8 characters and include letters, numbers, and a special character";
//     }

//     // Confirm password
//     if (!confirm) newError.confirm = "Please confirm your password";
//     else if (password !== confirm) newError.confirm = "Passwords do not match";

//     // Agree checkbox
//     if (!agree) newError.agree = "You must agree to the terms and conditions";

//     if (Object.keys(newError).length > 0) {
//       setError(newError);
//     } else {
//       setError({});
//       alert("Form submitted successfully!");

//       // Clear input fields
//       Nameref.current.value = "";
//       Emailref.current.value = "";
//       Passwordref.current.value = "";
//       Confirmref.current.value = "";
//       Agreeref.current.checked = false;
//     }
//   };

//   return (
//     <div className="w-screen h-screen bg-[#123431fc] flex items-center justify-center">
//       <form
//         onSubmit={CreateButton}
//         className="grid gap-4 px-6 py-6 w-full max-w-sm bg-white rounded-xl shadow-lg"
//       >
//         <h2 className="text-2xl font-bold text-[#123431]">SIGN UP</h2>
//         <p className="text-sm text-gray-600 border-b pb-2">
//           Please fill the details and create your account!
//         </p>

//         {/* Username */}
//         <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
//           <span className="p-2 bg-[#123431]">
//             <User color="white" size={20} />
//           </span>
//           <input
//             type="text"
//             placeholder="Username"
//             ref={Nameref}
//             className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
//           />
//         </div>
//         {error.name && (
//           <p className="text-red-400 text-sm italic  -mt-4">{error.name}</p>
//         )}

//         {/* Email */}
//         <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
//           <span className="p-2 bg-[#123431]">
//             <Send color="white" size={20} />
//           </span>
//           <input
//             type="email"
//             placeholder="Email Address"
//             ref={Emailref}
//             className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
//           />
//         </div>
//         {error.email && (
//           <p className="text-red-400 text-sm italic -mt-4">{error.email}</p>
//         )}

//         {/* Password */}
//         <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
//           <span className="p-2 bg-[#123431]">
//             <Lock color="white" size={20} />
//           </span>
//           <input
//             type="password"
//             placeholder="Password"
//             ref={Passwordref}
//             className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
//           />
//         </div>
//         {error.password && (
//           <p className="text-red-400 text-sm italic  -mt-4">{error.password}</p>
//         )}

//         {/* Confirm Password */}
//         <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
//           <span className="p-2 bg-[#123431]">
//             <KeyRound color="white" size={20} />
//           </span>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             ref={Confirmref}
//             className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
//           />
//         </div>
//         {error.confirm && (
//           <p className="text-red-400 text-sm italic  -mt-4">{error.confirm}</p>
//         )}

//         {/* Terms & Conditions */}
//         <div className="flex items-center gap-2 text-sm text-gray-700">
//           <input type="checkbox" ref={Agreeref} />
//           <p>
//             I accept the{" "}
//             <span className="text-[#123431] font-medium cursor-pointer">
//               Terms of Use
//             </span>{" "}
//             &{" "}
//             <span className="text-[#123431] font-medium cursor-pointer">
//               Privacy Policy
//             </span>
//           </p>
//         </div>
//         {error.agree && (
//           <p className="text-red-400 text-sm italic  -mt-4">{error.agree}</p>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full mt-4 bg-[#123431] hover:bg-[#0f2b29] text-white font-semibold py-2 rounded-md transition duration-300"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import Card from "./Card_event";
// import Img from "../Images/Art.jpg"
import { User } from "lucide-react";
import Img from "../Images/dehilEvent.avif"
import Img1 from "../Images/dehilEvent1.avif"
import Img2 from "../Images/dehilEvent2.avif"
import Img3 from "../Images/dehilEvent3.avif"
import { data, text } from "framer-motion/client";


const Carded = () => {
  const Event = [
    {img:Img,
      text:"Sales end soon",
      htext:"Enhancing Motivation and Drive: An Introductory...",
      date:"Tomorrow • 4:30 AM GMT+5:30",
      ptext2:"Free",
      text1:"Nourish To Live Rx",
      url:<User size={15}/>,
      text2:"170 follower"

    },
    {img:Img1,
      text:"Almost Full",
      htext:"New Dehli's Big Business Tech & Entrepreneur",
      date:"Tue, May 13 • 6:00 PM",
      ptext:"Food Court - Pacific Mall Tagore Garden",
      ptext2:"From ₹0.00",
      ptext2:"INDIAN ENTREPRENEUR",
      url:<User size={15}/>,
      text2:"1.4k follower"
    },
    {img:Img2,
      text:"Out of Stock",
      htext:"Arctic Circle India Forum.",
      date:"Sat, May 3 • 8:00 AM",
      ptext:"Taj Palace, New Delhi",
      ptext2:"₹3599.00",
      text1:"Arctic Circle",
      url:<User size={15}/>,
      text2:"124 follower"
    },
    {img:Img3,
      text:"Sales",
      htext:"InnoMetro - 5th Edition",
      date:"Wed, May 21 • 9:00 AM",
      ptext:"Bharat Mandapam",
      ptext2:"₹2399.00",
      text1:"Symbroj Media Pvt. Ltd.",
      url:<User size={15}/>,
      text2:"19 follower"
    },

  ]
    return(
      <div className="grid">
        <h1 className="font-bold sm:text-xl p-2 pl-6">Events In Delhi</h1>
        <div className="flex flex-wrap gap-4 sm:gap-8 sm:flex-nowrap lg:gap-12 p-2 justify-evenly">
        {
          Event.map((item,index)=>(
            <Card key={index} url={item.img} 
            {...(item.text && { text: item.text })}
            htext={item.htext}
        date={item.date}
        ptext={item.ptext}
        ptext2={item.ptext2}
        text1={item.text1}
        url1={item.url}
        text2={item.text2}
        />
          ))
        }
        </div>
      </div>
    )
}
export default Carded