"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import UserDetails from "./user-details";

export default function Header() {
  const path = usePathname();

  return (
    <header className="layout-spacing py-3 sm:py-5 grid grid-flow-col gap-5 items-center justify-between bg-white border-b border-gray-200">
      <span className="relative block sm:hidden w-10">
        <Image
          src={"/logo/logo-icon.svg"}
          width={300}
          height={300}
          layout="responsive"
          alt="Logo"
        />
      </span>

      <span className="relative hidden sm:block lg:hidden w-44">
        <Image
          src={"/logo/logo.svg"}
          width={300}
          height={300}
          layout="responsive"
          alt="Logo"
        />
      </span>

      <h2 className="font-bold text-gray-800 text-xl sm:text-2xl capitalize w-full overflow-hidden text-ellipsis">
        {path?.split("/")[path?.split("/").length - 1]}
      </h2>

      <UserDetails />
    </header>
  );
}
