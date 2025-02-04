"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi";
import Deposit from "./deposit";
import Withdrawal from "./withdrawal";
import Transfer from "./transfer";
import { BiTransferAlt } from "react-icons/bi";

export default function Exchange() {
  const activeTab = useSearchParams().get("active_tab");

  return (
    <div className="grid grid-rows-[auto_1fr] gap-5 pb-5 overflow-hidden bg-white">
      {/* Tabs */}
      <div className="grid grid-flow-col justify-start items-center border-b border-gray-300 mx-5">
        <Link
          href={"/exchange?active_tab=deposit"}
          className={`grid grid-flow-col gap-3 items-center relative px-3 sm:px-5 py-3 text-sm sm:text-base ${
            !activeTab || activeTab === "deposit"
              ? "text-primary"
              : "text-gray-500"
          }`}
        >
          <PiHandDepositFill className="text-xl" />
          Deposit
          <span
            className={`absolute w-full bg-primary h-[1px] -bottom-[1px] transition-all ${
              !activeTab || activeTab === "deposit"
                ? "opacity-100"
                : "opacity-0"
            }`}
          ></span>
        </Link>

        <Link
          href={"/exchange?active_tab=withdrawal"}
          className={`grid grid-flow-col gap-3 items-center relative px-3 sm:px-5 py-3 text-sm sm:text-base ${
            activeTab === "withdrawal" ? "text-primary" : "text-gray-500"
          }`}
        >
          <PiHandWithdrawFill className="text-xl" />
          Withdrawal
          <span
            className={`absolute w-full bg-primary h-[1px] -bottom-[1px] transition-all ${
              activeTab === "withdrawal" ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </Link>

        <Link
          href={"/exchange?active_tab=transfer"}
          className={`grid grid-flow-col gap-3 items-center relative px-3 sm:px-5 py-3 text-sm sm:text-base ${
            activeTab === "transfer" ? "text-primary" : "text-gray-500"
          }`}
        >
          <BiTransferAlt className="text-xl" />
          Transfer
          <span
            className={`absolute w-full bg-primary h-[1px] -bottom-[1px] transition-all ${
              activeTab === "transfer" ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </Link>
      </div>

      {(!activeTab || activeTab === "deposit") && <Deposit />}

      {activeTab === "withdrawal" && <Withdrawal />}
      {activeTab === "transfer" && <Transfer />}
    </div>
  );
}
