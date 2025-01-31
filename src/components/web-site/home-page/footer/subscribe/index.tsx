import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
  FaXTwitter,
} from "react-icons/fa6";

export default function Subscribe() {
  return (
    <div className="grid gap-3 md:w-1/2">
      <p className="text-sm md:text-xl font-light md:font-medium w-full text-gray-700">
        Stay updated with our latest features and offers.
      </p>
      <form className="flex gap-5 w-full md:w-3/4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full outline-none border px-4 rounded-lg"
        />
        <Button
          variant={ButtonVariants.PrimaryFilled}
          className="w-32 mx-auto text-base"
        >
          Subscribe
        </Button>
      </form>
      <div className="flex space-x-5 text-gray-500 mt-7 ">
        <Link
          href={"https://www.facebook.com/login/"}
          target="_blank"
          className="hover:text-[#1877F2]"
        >
          <FaFacebook className="size-6 md:size-8" />
        </Link>
        <Link
          href={"https://twitter.com/login"}
          target="_blank"
          className="hover:text-[black]"
        >
          <FaXTwitter className="size-6 md:size-8 " />
        </Link>
        <Link
          href={"https://www.instagram.com/accounts/login/"}
          target="_blank"
          className="hover:text-[#E1306C]"
        >
          <FaInstagram className="size-6 md:size-8" />
        </Link>
        <Link
          href={"https://www.linkedin.com/login"}
          target="_blank"
          className="hover:text-[#0A66C2]"
        >
          <FaLinkedinIn className="size-6 md:size-8" />
        </Link>
        <Link
          href={"https://medium.com/m/signin"}
          target="_blank"
          className="hover:text-[#12100E]"
        >
          <FaMedium className="size-6 md:size-8" />
        </Link>
      </div>
    </div>
  );
}
