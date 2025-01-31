"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { auth, db } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { userInitialState } from "@/store/slices/user.slice";
import Link from "next/link";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { COUNTRIES } from "@/constants/countries";
import { IoIosInformationCircleOutline } from "react-icons/io";

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
    const timestamp = Date.now();

    const data = new FormData(e.currentTarget);
    const firstName = data.get("first-name") as string;
    const lastName = data.get("last-name") as string;
    const email = data.get("email") as string;
    const phoneNumber = data.get("phone-number") as string;
    const city = data.get("city") as string;
    const state = data.get("state") as string;
    const country = data.get("country") as string;
    const password = data.get("password") as string;
    const confirmPassword = data.get("confirm-password") as string;

    if (password !== confirmPassword) {
      setErrorMessage(
        "The confirm password must match the password you entered. Please ensure both fields are identical."
      );
      return;
    }

    setIsLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        await setDoc(doc(db, "users", email), {
          ...userInitialState,
          id: user.uid,
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          country,
          city,
          state,
          timestamp,
        });

        setIsLoading(false);
        router.push("/login");
      })

      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
        setIsLoading(false);
      });
  };

  return (
    <div className="layout-spacing">
      <form onSubmit={handleFormSubmit} className="grid gap-5 mt-5">
        <Input
          type={Inputs.Text}
          id=""
          name="first-name"
          label="First Name"
          placeholder="Enter your First Name"
          required
        />

        <Input
          type={Inputs.Text}
          id=""
          name="last-name"
          label="Last Name"
          placeholder="Enter your Last Name"
          required
        />

        <Input
          type={Inputs.Email}
          id=""
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          required
        />

        <Input
          type={Inputs.Text}
          id=""
          name="phone-number"
          label="Phone Number"
          placeholder="Enter your phone number"
        />

        <Input
          type={Inputs.Text}
          id=""
          name="city"
          label="City"
          placeholder="Enter your city"
        />

        <Input
          type={Inputs.Text}
          id=""
          name="state"
          label="State"
          placeholder="Enter your state"
        />

        <Input
          type={Inputs.Select}
          options={COUNTRIES}
          name="country"
          label="Country"
          placeholder="Country of Residence"
          isSearch
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

        <Input
          type={Inputs.Password}
          id=""
          name="confirm-password"
          label="Confirm Password"
          placeholder="Re-Type Password"
          required
        />

        <div
          className={`grid grid-flow-col gap-1 w-max text-red-500 transition-all ${
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
          className="w-full py-3"
        >
          Sign Up
        </Button>
      </form>

      <div className="grid grid-flow-col w-max mx-auto items-center gap-2 mt-5">
        <p className=" text-gray-500 ">Already have an account?</p>
        <Link href={"/login"}>
          <button className="underline text-primary">Login</button>
        </Link>
      </div>
    </div>
  );
}
