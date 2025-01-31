import Link from "next/link";
import React from "react";

export default function OtherLinks() {
  return (
    <div className="flex space-x-16 text-sm md:text-xl text-gray-500 font-medium md:w-1/2 mt-10 md:mt-0">
      <div className="flex flex-col space-y-5">
        <Link
          href={"#about-us"}
          className="transition-all hover:underline hover:text-primary"
        >
          About Us
        </Link>
        <Link
          href={"#contact-us"}
          className="transition-all hover:underline hover:text-primary"
        >
          Contact Us
        </Link>
        <Link
          href={"#faq"}
          className="transition-all hover:underline hover:text-primary"
        >
          Faqs
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {" "}
        <Link
          href={"/terms-and-conditions"}
          className="transition-all hover:underline hover:text-primary"
        >
          Terms and Conditions
        </Link>
        <Link
          href={"/privacy-policy"}
          className="transition-all hover:underline hover:text-primary"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
