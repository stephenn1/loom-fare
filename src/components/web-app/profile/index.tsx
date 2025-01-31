"use client";

import React, { useRef, useState } from "react";
import DetailsItem from "./details-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Security from "./security";
import {
  FaCamera,
  FaGlobe,
  FaPhoneAlt,
  FaSuitcase,
  FaUser,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoMdMale } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { setUserPhotoUrl } from "@/store/slices/user.slice";
import { doc, setDoc } from "firebase/firestore";
import { supabase } from "@/config/supabase";
import { v4 as uuidv4 } from "uuid";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const fileInput = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    setUploading(true);
    const fileID = uuidv4();

    const { data, error } = await supabase.storage
      .from("test-storage")
      .upload(`${user.id}/${fileID}`, file);

    if (data) {
      const photoUrl = `https://hqeoienegxyhxzpmhnro.supabase.co/storage/v1/object/public/test-storage/${user.id}/${fileID}`;
      await setDoc(doc(db, "users", user?.email ?? ""), {
        ...user,
        photoUrl,
      }).then(() => {
        dispatch(setUserPhotoUrl(photoUrl));
        setUploading(false);
      });
    } else {
      console.log(error);
      setUploading(false);
    }
  };

  const handleSelectFile = () => {
    fileInput?.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type?.split("/")[0] !== "image") return;
    uploadFile(selectedFile);
  };

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

  return (
    <div className="grid gap-10 py-10 bg-white rounded-xl">
      {/* User Image */}
      <div className="grid px-5 sm:px-10">
        <div className="relative w-max mx-auto xl:mx-0">
          {!user.photoUrl ? (
            <div className="grid bg-primary place-content-center w-40 h-40 rounded-full mx-auto relative overflow-hidden">
              <span className="text-5xl font-semibold text-white">
                {user.firstName.substring(0, 1)} {user.lastName.substring(0, 1)}
              </span>
            </div>
          ) : (
            <span
              className={`block relative w-40 h-40 shadow-md mx-auto rounded-full overflow-hidden`}
            >
              <Image
                src={user.photoUrl}
                fill
                objectFit="cover"
                objectPosition="center"
                alt="User Image"
              />
            </span>
          )}
          <button
            onClick={handleSelectFile}
            disabled={uploading}
            className="bg-white w-10 h-10 rounded-full grid place-content-center absolute bottom-4 right-0 shadow-[2px_2px_8px_-4px_rgba(0,_0,_0,_0.5)]"
          >
            {uploading ? (
              <span className="block w-5 h-5 rounded-full border-2 border-gray-300 border-b-transparent animate-spin"></span>
            ) : (
              <FaCamera className="text-gray-500" />
            )}
          </button>

          <input
            ref={fileInput}
            type="file"
            multiple={true}
            accept="image/*"
            name=""
            id=""
            hidden={true}
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="grid px-5 sm:px-10 xl:px-0 xl:grid-cols-2">
        {/* Personal Details */}
        <div className="xl:px-10 pb-10 xl:pb-0 grid gap-5">
          <DetailsItem
            id="ful-name"
            icon={<FaUser />}
            placeholder="Enter Your Full Name"
            type="text"
            value={`${user.firstName} ${user.lastName}`}
          />

          <DetailsItem
            id="email"
            icon={<MdMail />}
            placeholder="Your Email Address"
            type="email"
            value={user.email}
          />

          <DetailsItem
            id="phone-number"
            icon={<FaPhoneAlt />}
            placeholder="Include country code, e.g., +1 for US"
            type="text"
            value={user.phoneNumber}
          />

          <DetailsItem
            editable
            id="gender"
            icon={<IoMdMale />}
            placeholder="Your Gender"
            type="text"
            value={user.gender}
          />

          <DetailsItem
            editable
            id="occupation"
            icon={<FaSuitcase />}
            placeholder="What do you do"
            type="text"
            value={user.occupation}
          />
        </div>

        {/* Adress Details */}
        <div className="content-start xl:px-10 pt-10 xl:pt-0  border-t xl:border-t-0 xl:border-l border-gray-300 h-full grid gap-5">
          <DetailsItem
            editable
            id="address"
            icon={<IoLocationSharp />}
            placeholder="Address Line"
            type="text"
            value={user.address}
          />

          <DetailsItem
            editable
            id="city"
            icon={<IoLocationSharp />}
            placeholder="City"
            type="text"
            value={user.city}
          />

          <DetailsItem
            editable
            id="state"
            icon={<IoLocationSharp />}
            placeholder="State"
            type="text"
            value={user.state}
          />

          <DetailsItem
            editable
            id="country"
            icon={<FaGlobe />}
            placeholder="Country"
            type="text"
            value={user.country}
          />
        </div>
      </div>

      {/* Security */}
      <Security />

      {/* Logout */}
      <div className="px-10">
        <div className="border-t border-gray-300 pt-10">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold rounded-lg ml-auto w-full max-w-xs grid py-3 px-20"
          >
            {isSigningOut ? (
              <span className="w-6 h-6 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
            ) : (
              <span>Logout</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
