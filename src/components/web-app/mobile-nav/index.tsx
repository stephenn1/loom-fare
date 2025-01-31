"use client";

import React from "react";
import { WEB_APP_NAVIGATION } from "@/constants/web-app-navigation";
import NavigationItem from "./navigation-item";
import Link from "next/link";
import { TbArrowsExchange } from "react-icons/tb";

export default function MobileNav() {
  return (
    <nav className="lg:hidden grid grid-flow-col gap-3 py-5 items-center justify-between layout-spacing">
      {WEB_APP_NAVIGATION.slice(0, 2).map((n, i) => (
        <NavigationItem key={i} icon={n.icon} title={n.title} url={n.url} />
      ))}
      <Link href={"/exchange"} className={`grid relative`}>
        <span className="text-lg grid w-10 h-10 left-1/2 -translate-x-1/2 justify-center bg-primary absolute text-white rounded-full bottom-8 place-content-center">
          <TbArrowsExchange />
        </span>
        <p className="text-[10px] font-medium text-gray-400">Exchange</p>
      </Link>
      {WEB_APP_NAVIGATION.slice(3, 5).map((n, i) => (
        <NavigationItem key={i} icon={n.icon} title={n.title} url={n.url} />
      ))}
    </nav>
  );
}
