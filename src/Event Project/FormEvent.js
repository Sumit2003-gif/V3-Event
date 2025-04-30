import React, { useState, useRef } from "react";
import { User, Send, Lock, KeyRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Login, Logout } from "./redux login/loginSetup";

const Form = () => {
  const [input, setInput] = useState("");
  const isLogin = useSelector((state) => state.Login.isLogin);
  const username = useSelector((state) => state.Login.username);
  const dispatch = useDispatch();

  const [error, setError] = useState({});

  const Nameref = useRef(null);
  const Emailref = useRef(null);
  const Passwordref = useRef(null);
  const Confirmref = useRef(null);
  const Agreeref = useRef(null);

  const handleLogin = () => {
    if (input.trim() !== "") {
      dispatch(Login(input));
    }
  };

  const handleLogout = () => {
    dispatch(Logout());
  };

  const CreateButton = (e) => {
    e.preventDefault();

    const name = Nameref.current.value.trim();
    const email = Emailref.current.value.trim();
    const password = Passwordref.current.value.trim();
    const confirm = Confirmref.current.value.trim();
    const agree = Agreeref.current.checked;

    const newError = {};

    // Name validation
    if (!name) newError.name = "Username is compulsory";

    // Email validation
    if (!email) newError.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = "Invalid Email";
    }

    // Password validation
    if (!password) newError.password = "Password is required";
    else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    ) {
      newError.password =
        "Password must be at least 8 characters and include letters, numbers, and a special character";
    }

    // Confirm password
    if (!confirm) newError.confirm = "Please confirm your password";
    else if (password !== confirm) newError.confirm = "Passwords do not match";

    // Agree checkbox
    if (!agree) newError.agree = "You must agree to the terms and conditions";

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
      alert("Form submitted successfully!");

      // Dispatch login action after form validation
      dispatch(Login(name)); // Use the valid username after the form

      // Clear input fields
      Nameref.current.value = "";
      Emailref.current.value = "";
      Passwordref.current.value = "";
      Confirmref.current.value = "";
      Agreeref.current.checked = false;
    }
  };

  return (
    <div>
      {isLogin ? (
        <h1>
          Welcome, {username}
          <button onClick={handleLogout}>Logout</button>
        </h1>
      ) : (
        <form
          onSubmit={CreateButton}
          className="grid gap-4 px-6 py-6 w-full border-black border-2 max-w-sm place-content-center place-items-center justify-center items-center bg-white rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#123431]">SIGN UP</h2>
          <p className="text-sm text-gray-600 border-b pb-2">
            Please fill the details and create your account!
          </p>

          {/* Username */}
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
            <span className="p-2 bg-[#123431]">
              <User color="white" size={20} />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              ref={Nameref}
              className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
            />
          </div>
          {error.name && (
            <p className="text-red-400 text-sm italic -mt-4">{error.name}</p>
          )}

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
            <span className="p-2 bg-[#123431]">
              <Send color="white" size={20} />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              ref={Emailref}
              className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
            />
          </div>
          {error.email && (
            <p className="text-red-400 text-sm italic -mt-4">{error.email}</p>
          )}

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
            <span className="p-2 bg-[#123431]">
              <Lock color="white" size={20} />
            </span>
            <input
              type="password"
              placeholder="Password"
              ref={Passwordref}
              className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
            />
          </div>
          {error.password && (
            <p className="text-red-400 text-sm italic -mt-4">{error.password}</p>
          )}

          {/* Confirm Password */}
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 overflow-hidden">
            <span className="p-2 bg-[#123431]">
              <KeyRound color="white" size={20} />
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              ref={Confirmref}
              className="pl-3 py-2 w-full bg-transparent text-gray-800 focus:outline-none"
            />
          </div>
          {error.confirm && (
            <p className="text-red-400 text-sm italic -mt-4">{error.confirm}</p>
          )}

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" ref={Agreeref} />
            <p>
              I accept the{" "}
              <span className="text-[#123431] font-medium cursor-pointer">
                Terms of Use
              </span>{" "}
              &{" "}
              <span className="text-[#123431] font-medium cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
          {error.agree && (
            <p className="text-red-400 text-sm italic -mt-4">{error.agree}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            // onClick={handleLogin}
            className="w-full mt-4 bg-[#123431] hover:bg-[#0f2b29] text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Create Account
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
