"use client";

import { auth } from "@/config/firebase";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Form() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  // const handleGoogleSigin = async () => {
  //   clearErrorMessage();

  //   const provider = new GoogleAuthProvider();

  //   await signInWithPopup(auth, provider)
  //     .then(() => {
  //       router.push("/dashboard");
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //     });
  // };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrorMessage();

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false);
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
        setIsLoading(false);
      });
  };

  return (
    <div className="grid gap-5 layout-spacing">
      <form onSubmit={handleFormSubmit} className="grid gap-5 mt-5">
        <Input
          type={Inputs.Email}
          id=""
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          required
        />

        <Input
          type={Inputs.Password}
          id=""
          name="password"
          label="Password"
          placeholder="Enter your Unique Password"
          required
        />

        <Link
          href="/forgot-password"
          className="ml-auto text-gray-700 font-semibold"
        >
          Forgot Password?
        </Link>

        <div
          className={`grid grid-flow-col w-max gap-1 text-red-500 transition-all ${
            errorMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          <IoIosInformationCircleOutline />
          <p className="text-xs text-red-500">{errorMessage}</p>
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          variant={ButtonVariants.PrimaryFilled}
          className="w-full ml-auto px-32 py-3"
        >
          Login
        </Button>
      </form>

      <div className="grid grid-flow-col w-max mx-auto items-center gap-2">
        <p className=" text-gray-500 ">Don,t have an account?</p>
        <Link href={"/sign-up"}>
          <button className="underline text-primary font-semibold">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
