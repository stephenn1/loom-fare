"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi";
import Deposit from "./deposit";
import Withdrawal from "./withdrawal";

export default function Exchange() {
  const activeTab = useSearchParams().get("active_tab");

  return (
    <div className="grid grid-rows-[auto_1fr] gap-5 px-5 pb-5 overflow-hidden bg-white">
      {/* Tabs */}
      <div className="grid grid-flow-col gap-5 justify-start items-center border-b border-gray-300">
        <Link
          href={"/exchange?active_tab=deposit"}
          className={`grid grid-flow-col gap-3 items-center relative px-5 py-3 ${
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
          className={`grid grid-flow-col gap-3 items-center relative py-3  ${
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
      </div>

      {(!activeTab || activeTab === "deposit") && <Deposit />}

      {activeTab === "withdrawal" && <Withdrawal />}
    </div>
  );
}
