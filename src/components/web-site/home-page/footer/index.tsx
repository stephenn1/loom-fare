import Image from "next/image";
import React from "react";
import Subscribe from "./subscribe";
import OtherLinks from "./other-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 pt-16 md:px-16">
      <Link href={"/"}>
        <div className="grid grid-flow-col gap-3 w-max items-center">
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
        </div>
      </Link>
      <div className="flex flex-col md:flex-row mt-10">
        <Subscribe />
        <OtherLinks />
      </div>
      <p className="text-gray-700 text-sm sm:text-base text-center pt-5 md:pt-7 ">
        LoomFare is a registered trademark of Bitcoinforme S.L. (Tax ID:
        B54835301), a company that has been operating since 2015 in Germany.
        Committed to protecting customers and their assets, LoomFare partners
        with leading financial institutions to offer specialized accounts that
        adhere to stringent regulations, including Anti-Money Laundering (AML)
        and Counter-Terrorist Financing (CTF) compliance.
      </p>
      <p className="text-gray-700 text-sm sm:text-base text-center py-2 border-b-2 border-primary">
        As a cryptocurrency platform, LoomFare facilitates secure and efficient
        sending, receiving, trading, and mining of digital assets. Registered
        with the Bank of Germany under number D592 for custody services and
        digital asset transactions, LoomFare ensures a reliable and transparent
        environment for its users.
      </p>
      <p className="text-sm md:text-base text-gray-500 text-center py-2">
        © 2015 LoomFare. All rights reserved
      </p>
    </footer>
  );
}
