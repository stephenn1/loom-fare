"use client";

import { auth } from "@/config/firebase";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrorMessage();

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;

    setIsLoading(true);

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="grid gap-5">
      <Input
        type={Inputs.Email}
        id=""
        name=""
        label="Email Address"
        placeholder="Enter your email address"
        required
      />

      <p className="min-h-6 text-red-400">{errorMessage}</p>

      <Button
        isLoading={isLoading}
        variant={ButtonVariants.PrimaryFilled}
        className="w-full mx-auto px-32 py-3"
      >
        Send Link
      </Button>

      <div className="grid grid-flow-col w-max mx-auto mt-5 items-center gap-2">
        <p className="text-gray-500">Don,t have an account?</p>
        <Link href={"/sign-up"}>
          <button className="underline text-primary font-semibold">
            Sign Up
          </button>
        </Link>
      </div>
    </form>
  );
}
