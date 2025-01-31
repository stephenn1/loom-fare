import Form from "@/components/auth/sign-up/form";
import React from "react";
import { LuUser } from "react-icons/lu";

export default function Page() {
  return (
    <div className="grid content-center mx-auto w-full max-w-lg gap-5 h-full p-5 sm:p-10">
      <div className="text-center grid gap-1">
        <span className="bg-secondary w-10 h-10 rounded-full grid place-content-center text-primary text-2xl mx-auto">
          <LuUser />
        </span>
        <p className="text-lg font-semibold">Your details</p>
        <p className="text-gray-500">
          Please provide your name and email address
        </p>
      </div>

      <Form />
    </div>
  );
}
