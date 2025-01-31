import Link from "next/link";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Maintenance() {
  return (
    <main className="h-full layout-spacing flex justify-center items-center max-w-lg mx-auto">
      <div className=" border border-[#d22424] bg-[#fff3c3] text-center max-xl rounded-lg p-2 sm:p-4">
        <RiErrorWarningFill className="text-[#d22424] size-14 mx-auto" />
        <h4 className="font-semibold text-lg sm:text-xl my-3">
          System Maintenances Notice{" "}
        </h4>
        <p className="text-base sm:text-lg text-gray-600">
          We are currently performing scheduled maintenance to improve our
          services. During this time, access to your account may be temporarily
          unavailable. We apologize for any inconvenience and appreciate your
          patience.
        </p>
        <p className="mt-7 text-base sm:text-lg text-gray-600">
          Please check back later or contact{" "}
          <Link
            href={"mailto:support@loomfare.com"}
            className="text-[#001A9D] font-medium"
          >
            {" "}
            support{" "}
          </Link>{" "}
          if you have any urgent concerns.
        </p>
      </div>
    </main>
  );
}
