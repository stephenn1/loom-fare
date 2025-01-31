"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WEB_APP_NAVIGATION } from "@/constants/web-app-navigation";
import NavigationItem from "./navigation-item";
import { BiSupport } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FiLogOut } from "react-icons/fi";

export default function SideNav() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className={`bg-primary hidden lg:grid grid-rows-[auto_1fr_auto] gap-20 w-72 p-5`}
    >
      <Link href={"/dashboard"}>
        <div className="grid grid-flow-col gap-3 w-max items-center">
          {/* Logo */}
          <Image
            src={"/logo-2.svg"}
            width={300}
            height={300}
            alt="Entobo Logo"
            className="w-8"
          />
          <p className="font-semibold text-gray-000 text-xl text-white">
            LoomFare
          </p>
        </div>
      </Link>

      <nav className="grid gap-5 content-start">
        {WEB_APP_NAVIGATION.slice(0, 5).map((n, i) => (
          <NavigationItem key={i} icon={n.icon} title={n.title} url={n.url} />
        ))}
      </nav>

      <div className="grid gap-10 border-t border-white border-opacity-50 pt-5">
        <NavigationItem
          icon={<BiSupport />}
          title={"Support"}
          url={"/support"}
        />

        <div className=" grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          {/* User Image */}
          <div className="relative w-max">
            {!user.photoUrl ? (
              <div className="grid bg-white place-content-center w-10 h-10 rounded-full mx-auto relative overflow-hidden">
                <span className="text-sm font-semibold text-primary">
                  {user.firstName.substring(0, 1)}{" "}
                  {user.lastName.substring(0, 1)}
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
          </div>

          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-white overflow-hidden text-ellipsis text-nowrap">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm font-semibold text-gray-300 overflow-hidden text-ellipsis">
              {user.email}
            </p>
          </div>

          <button className="text-white text-xl">
            <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  );
}
