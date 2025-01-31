import Link from "next/link";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Suspended() {
  return (
    <main className="h-full layout-spacing flex justify-center items-center max-w-lg mx-auto">
      <div className=" border border-[#d22424] bg-[#ffebe8] text-center max-xl rounded-lg p-2 sm:p-4">
        <RiErrorWarningFill className="text-[#d85b53] size-14 mx-auto" />
        <h4 className="font-semibold text-lg sm:text-xl my-3">
          Your account is suspended
        </h4>
        <p className="text-base sm:text-lg text-gray-600">
          Your account has been suspended due to inactivity that violates our
          terms. To regain access, please make your initial deposit to your
          wallet address{" "}
          <Link href={"/wallet-address"} className="text-[#001A9D] font-medium">
            {" "}
            here.
          </Link>{" "}
          Failure to do so will result in permanent account disablement and if
          transactions on the account will be reversed.
        </p>
        <p className="mt-7 text-base sm:text-lg text-gray-600">
          For assistance, contact{" "}
          <Link
            href={"mailto:support@loomfare.com"}
            className="text-[#001A9D] font-medium"
          >
            {" "}
            support{" "}
          </Link>
        </p>
      </div>
    </main>
  );
}
