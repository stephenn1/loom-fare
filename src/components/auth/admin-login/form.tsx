"use client";

import { auth } from "@/config/firebase";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Form() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrorMessage();

    const data = new FormData(e.currentTarget);
    const email = "admin@loomtrust.com";
    const password = data.get("password") as string;

    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false);
        router.push("/admin/users");
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="grid gap-5 mt-5 p-5">
      <Input
        type={Inputs.Password}
        id="password"
        name="password"
        label="Password"
        placeholder="Enter your Unique Password"
        onChange={clearErrorMessage}
        required
      />

      <p className="min-h-6 text-red-400">{errorMessage}</p>

      <Button
        type="submit"
        isLoading={isLoading}
        variant={ButtonVariants.PrimaryFilled}
        className="w-full max-w-64 ml-auto px-32 py-3"
      >
        Login
      </Button>
    </form>
  );
}
