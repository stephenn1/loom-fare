import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Support() {
  return (
    <div className="bg-[#E9F6ED] grid gap-5 justify-items-center p-10 rounded-xl max-w-3xl w-full mx-auto">
      <Image
        src={"/support.svg"}
        alt="Support illustration"
        width={300}
        height={300}
        className="mx-auto"
      />
      <p className="text-lg md:text-3xl font-semibold text-gray-600">
        Contact Us via our Email
      </p>
      <Link
        href={"mailto:support@primefutures.com"}
        className="text-primary text-xl md:text-2xl  font-semibold underline"
      >
        support@loomfare.com
      </Link>
    </div>
  );
}
