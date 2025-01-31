"use client";

import { RootState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function UserDetails() {
  const user = useSelector((state: RootState) => state.user);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <div className=" grid grid-cols-[auto_1fr] gap-3 items-center">
        <p className="hidden md:block text-sm text-gray-500 italic">
          User Id: #{user.id.substring(0, 12)}
        </p>

        {/* User Image */}
        <button
          onClick={handleToggleShowDetails}
          className="relative w-max z-20"
        >
          {!user.photoUrl ? (
            <div className="grid bg-primary place-content-center w-10 h-10 rounded-full mx-auto relative overflow-hidden">
              <span className="text-sm font-semibold text-white">
                {user.firstName.substring(0, 1)} {user.lastName.substring(0, 1)}
              </span>
            </div>
          ) : (
            <span
              className={`block w-10 h-10 mx-auto rounded-full ${
                user.photoUrl && "overflow-hidden"
              }`}
            >
              <Image
                src={user.photoUrl}
                width={500}
                height={500}
                alt="User Image"
              />
            </span>
          )}
          <span className="block bg-green-400 rounded-full w-3 h-3 absolute bottom-0 right-0"></span>
        </button>
      </div>

      {/* blur bg */}
      <span
        onClick={handleToggleShowDetails}
        className={`grid w-full h-full z-10 fixed top-0 left-0 transition-all bg-black bg-opacity-60 backdrop-blur-sm ${
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
            {user.firstName} {user.lastName}
          </p>
        </div>

        {/* Id */}
        <div
          className={`grid grid-cols-[auto_1fr] text-gray-500 gap-3 items-center`}
        >
          <p className="text-lg font-bold">#</p>
          <p className="text-ellipsis whitespace-nowrap text-sm overflow-hidden">
            {user.id.substring(0, 12)}
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

        {/* Phone Number*/}
        <div
          className={`grid grid-cols-[auto_1fr] text-gray-500 gap-3 items-center`}
        >
          <FaPhoneAlt className="" />
          <p className="text-ellipsis whitespace-nowrap text-sm overflow-hidden">
            {user.phoneNumber}
          </p>
        </div>

        {/* Country*/}
        <div
          className={`grid grid-cols-[auto_1fr] text-gray-500 gap-3 items-center`}
        >
          <FaGlobe className="" />
          <p className="text-ellipsis whitespace-nowrap text-sm overflow-hidden">
            {user.country}
          </p>
        </div>

        <div className="grid gap-3 mt-3">
          {/* View Profile */}
          <Link href={"/profile"} className="grid">
            <button
              onClick={handleToggleShowDetails}
              className="grid grid-flow-col justify-start items-center gap-3 bg-primary rounded-md border border-primary text-sm py-2 px-5 font-semibold text-white"
            >
              <FaUser />
              Profile
            </button>
          </Link>

          <Link href={"/support"} className="grid">
            <button
              onClick={handleToggleShowDetails}
              className="grid grid-flow-col justify-start items-center gap-3 bg-gray-100 rounded-md border border-gray-300 text-sm py-2 px-5 font-semibold text-gray-500"
            >
              <BiSupport className="text-lg" />
              Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
