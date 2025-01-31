import Form from "@/components/auth/forgot-password/form";
import React from "react";

export default function Page() {
  return (
    <div className="grid content-center mx-auto w-full max-w-lg gap-5 h-full p-5 sm:p-10">
      <div className="text-center grid gap-1">
        <p className="text-lg font-semibold">Forgot password</p>
        <p className="text-gray-500">
          Please enter your email and we will send you a recovery URL.{" "}
        </p>
      </div>

      <Form />
    </div>
  );
}
