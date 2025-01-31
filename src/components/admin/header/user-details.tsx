"use client";

import { auth } from "@/config/firebase";
import { RootState } from "@/store";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function UserDetails() {
  const user = useSelector((state: RootState) => state.adminUsers);
  const [showDetails, setShowDetails] = useState(false);

  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleLogout = () => {
    setIsSigningOut(true);
    signOut(auth)
      .then(() => {
        setIsSigningOut(false);
      })
      .catch((error) => {
        alert(error);
        setIsSigningOut(false);
      });
  };

  const handleToggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggleShowDetails}
        className={`grid grid-flow-col md:gap-3 w-max items-end z-20 relative`}
      >
        {/* User Image */}
        <div className="relative w-max">
          <div className="grid bg-primary place-content-center w-10 h-10 rounded-full mx-auto relative overflow-hidden">
            <span className="text-sm font-semibold text-white">AD</span>
          </div>
          <span className="block bg-green-400 rounded-full w-3 h-3 absolute bottom-0 right-0"></span>
        </div>

        {/* User Name */}
        {!showDetails && (
          <p className="text-center font-semibold hidden md:block text-sm text-gray-700 mt-5">
            Amin
          </p>
        )}
      </button>

      {/* blur bg */}
      <span
        className={`grid w-full h-full z-10 fixed top-0 left-0 transition-all bg-black bg-opacity-50 backdrop-blur-[2px] ${
          showDetails ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></span>

      <div
        className={`absolute top-full grid gap-3 right-0 w-60 z-10 bg-white rounded-lg shadow-[1px_1px_20px_-8px_rgba(0,_0,_0,_0.2)] transition-all overflow-hidden ${
          showDetails ? "max-h-max mt-2  p-5" : "max-h-0 p-0 mt-0"
        }`}
      >
        {/* Name */}
        <div className={`grid grid-cols-[auto_1fr] gap-3 items-center`}>
          <RiVerifiedBadgeFill className="text-primary text-xl" />
          <p className="text-ellipsis whitespace-nowrap overflow-hidden">
            Admin
          </p>
        </div>

        {/* Email */}
        <div
          className={`grid grid-cols-[auto_1fr] text-gray-500 gap-3 items-center`}
        >
          <MdEmail className="" />
          <p className="text-ellipsis whitespace-nowrap text-sm overflow-hidden">
            {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="text-sm bg-red-500 text-white py-2 rounded-md mt-3"
        >
          {isSigningOut ? (
            <span className="w-6 h-6 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
          ) : (
            <span>Logout</span>
          )}
        </button>
      </div>
    </div>
  );
}
