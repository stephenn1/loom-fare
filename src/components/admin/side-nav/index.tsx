"use client";

import React from "react";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import NavigationItem from "./navigation-item";
import { ADMIN_NAVIGATION } from "@/constants/admin-navigation";
import Link from "next/link";

export default function SideNav() {
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
        {ADMIN_NAVIGATION.slice(0, 5).map((n, i) => (
          <NavigationItem key={i} icon={n.icon} title={n.title} url={n.url} />
        ))}
      </nav>

      <div className=" grid grid-cols-[auto_1fr_auto] gap-3 items-center border-t border-white border-opacity-50 pt-5">
        {/* User Image */}
        <div className="relative w-max">
          <div className="grid bg-white place-content-center w-10 h-10 rounded-full mx-auto relative overflow-hidden">
            <span className="text-sm font-semibold text-primary">AD</span>
          </div>
        </div>

        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-white overflow-hidden text-ellipsis text-nowrap">
            Admin
          </p>
          <p className="text-sm font-semibold text-gray-300 overflow-hidden text-ellipsis">
            admin@loomfare.com
          </p>
        </div>

        <button className="text-white text-xl">
          <FiLogOut />
        </button>
      </div>
    </div>
  );
}
