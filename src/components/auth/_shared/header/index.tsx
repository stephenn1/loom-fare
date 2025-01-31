import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

export default function Header() {
  return (
    <header className="layout-spacing z-10 sticky top-0 left-0 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto grid grid-flow-col items-center gap-10 justify-between py-5">
        <Link
          href={"/"}
          className="grid grid-flow-col gap-3 w-max items-center"
        >
          {/* Logo */}
          <Image
            src={"/logo.svg"}
            width={300}
            height={300}
            alt="Entobo Logo"
            className="w-8"
          />
          <p className="font-semibold text-gray-000 text-xl text-primary">
            LoomFare
          </p>
        </Link>

        {/* Navigation */}
        <Link href={"mailto:support@loomfare.com"} className="grid">
          <button className="grid grid-flow-col items-center gap-1 bg-gray-100 rounded-md border border-gray-300 text-sm py-2 px-3 font-semibold text-gray-500">
            <BiSupport className="text-lg" />
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
