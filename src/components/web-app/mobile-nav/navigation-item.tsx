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
  url,
  title,
}: NavigationItemProps) {
  const path = usePathname();

  return (
    <Link
      href={url}
      className={`text-2xl grid justify-items-center ${
        path === url ? " text-primary" : " text-gray-400"
      }`}
    >
      {icon}
      <p className="text-[10px] font-medium">{title}</p>
    </Link>
  );
}
