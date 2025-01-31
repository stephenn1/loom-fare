import Link from "next/link";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Disable() {
  return (
    <main className="h-full layout-spacing flex justify-center items-center max-w-lg mx-auto">
      <div className=" border border-[#d22424] bg-[#ffebe8] text-center max-xl rounded-lg p-2 sm:p-4">
        <RiErrorWarningFill className="text-[#d85b53] size-14 mx-auto" />
        <h4 className="font-semibold text-lg sm:text-xl my-3">
          Account Disabled{" "}
        </h4>
        <p className="text-base sm:text-lg text-gray-600">
          Your account has been disabled due to a violation of our terms of
          service. This action was taken to ensure compliance with our policies
          and maintain the security of our platform.
        </p>
        <p className="mt-5 text-base sm:text-lg text-gray-600">
          To resolve the issue, please reach out to our{" "}
          <Link
            href={"mailto:support@loomfare.com"}
            className="text-[#001A9D] font-medium"
          >
            {" "}
            support{" "}
          </Link>
          team for further assistance.
        </p>
      </div>
    </main>
  );
}
