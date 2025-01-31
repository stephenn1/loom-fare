"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationItemProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export default function NavigationItem({
  icon,
  title,
  url,
}: NavigationItemProps) {
  const path = usePathname();

  return (
    <Link
      href={url}
      className={`hidden lg:grid grid-cols-[auto_1fr] w-full px-3 py-2 rounded-md overflow-hidden transition-all relative gap-3 items-center ${
        path === url
          ? " text-primary bg-white"
          : " text-white hover:bg-white hover:bg-opacity-10"
      }`}
    >
      {icon}
      <p className={`font-semibold ${path === url ? "" : ""}`}>{title}</p>
    </Link>
  );
}
