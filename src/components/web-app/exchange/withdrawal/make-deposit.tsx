import { Button } from "@/ui";
import Link from "next/link";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function MakeDeposit() {
  return (
    <div className="w-full max-w-xl mx-auto grid content-center gap-10">
      <div className="grid grid-cols-[auto_1fr] bg-secondary rounded-lg p-5 gap-3 content-start">
        <IoIosInformationCircleOutline className="text-lg sm:text-2xl text-gray-700" />
        <p className="text-sm sm:text-base text-gray-800">
          Please note that withdrawals are currently unavailable as your account
          remains inactive. By initiating an initial deposit, you can activate
          your account and gain access to withdrawal capabilities. Kindly
          proceed with the deposit to activate your account.
        </p>
      </div>

      <Link href={"/finance?active_tab=deposit"} className="grid">
        <Button className="mx-auto w-full max-w-sm py-3">Make a Deposit</Button>
      </Link>
    </div>
  );
}
