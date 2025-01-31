"use client";

import React, { useEffect, useState } from "react";
import DetailsItem from "./details-item";
import {
  FaGlobe,
  FaKey,
  FaPhoneAlt,
  FaSuitcase,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoMdMale } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { db } from "@/config/firebase";
import { useParams, useRouter } from "next/navigation";
import { User, userInitialState } from "@/store/slices/user.slice";
import { doc, onSnapshot } from "firebase/firestore";
import { Logo } from "@/ui";
import AddBalance from "./add-balance";
import AddDeposit from "./add-deposit";
import UpdatePrompt from "./update-prompt";
import UpdateStatus from "./update-status";

export default function Profile() {
  const router = useRouter();
  const userEmail = useParams().email as string;

  const [user, setUser] = useState<User | { [field: string]: any }>(
    userInitialState
  );

  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    const docRef = doc(db, "users", decodeURIComponent(userEmail));

    onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setUser({ ...doc.data() });
        setIsLoading(false);
      } else {
        router.push("/admin/users");
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full grid place-content-center">
        <span className="animate-pulse">
          <Logo className="w-40 opacity-20" />
        </span>
      </div>
    );
  }

  return (
    <div className="grid gap-10 py-10 bg-white rounded-xl overflow-y-auto custom-scroll-bar">
      {/* User Image */}
      <div className="grid px-5 sm:px-10">
        <div className="relative w-max mx-auto xl:mx-0">
          {!user.photoUrl ? (
            <div className="grid bg-primary place-content-center w-32 h-32 rounded-full mx-auto relative overflow-hidden">
              <span className="text-5xl font-semibold text-white">
                {user.firstName.substring(0, 1)} {user.lastName.substring(0, 1)}
              </span>
            </div>
          ) : (
            <span
              className={`block w-32 h-32 mx-auto rounded-full ${
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
        </div>
      </div>

      <div className="grid px-5 sm:px-10 xl:px-0 xl:grid-cols-2">
        {/* Personal Details */}
        <div className="xl:px-10 pb-10 xl:pb-0 grid gap-5 content-start">
          <DetailsItem
            icon={<FaUser />}
            label="Full Name"
            value={`${user.firstName} ${user.lastName}`}
          />

          <DetailsItem
            icon={<FaPhoneAlt />}
            label="Phone Number"
            value={user.phoneNumber}
          />

          <DetailsItem icon={<MdMail />} label="Email" value={user.email} />

          <DetailsItem
            icon={<FaKey />}
            label="Password"
            value={user.password}
          />

          <DetailsItem
            icon={<FaWallet />}
            label="Balance (₦)"
            value={Number(user.balance).toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />

          <DetailsItem
            icon={<FaWallet />}
            label="Deposit (₦)"
            value={Number(user.deposit).toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </div>

        {/* Adress Details */}
        <div className="content-start xl:px-10 py-10 xl:py-0  border-t xl:border-t-0 xl:border-l border-gray-300 h-full grid gap-5">
          <DetailsItem
            icon={<IoMdMale />}
            label="Your Gender"
            value={user.gender}
          />

          <DetailsItem
            icon={<FaSuitcase />}
            label="Occupation"
            value={user.occupation}
          />

          <DetailsItem
            icon={<IoLocationSharp />}
            label="Address Line"
            value={user.address}
          />

          <DetailsItem
            icon={<IoLocationSharp />}
            label="City"
            value={user.city}
          />

          <DetailsItem
            icon={<IoLocationSharp />}
            label="State"
            value={user.state}
          />

          <DetailsItem
            icon={<FaGlobe />}
            label="Country"
            value={user.country}
          />
        </div>
      </div>
      <div className="grid content-start px-5 sm:px-10">
        <UpdateStatus user={user} refresh={getUserData} />

        {/* Update Prompt */}
        <UpdatePrompt user={user} refresh={getUserData} />

        {/* Add Deposit */}
        <AddDeposit user={user} refresh={getUserData} />

        {/* Add Balance */}
        <AddBalance user={user} refresh={getUserData} />
      </div>
    </div>
  );
}
