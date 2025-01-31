import Form from "@/components/auth/login/form";
import React from "react";

export default function Page() {
  return (
    <div className="grid content-center mx-auto w-full max-w-lg gap-5 p-5 sm:p-10">
      <div className="text-center grid gap-1">
        <p className="text-lg font-semibold">Login to your account</p>
        <p className="text-gray-500">
          Welcome back! Please enter your login details
        </p>
      </div>

      <Form />
    </div>
  );
}
