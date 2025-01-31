"use client";

import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import React, { FormEvent, useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export default function Form() {
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const showToastTimeout = setTimeout(() => {
      setShowToast(true);
      setIsLoading(false);
      clearTimeout(showToastTimeout);
    }, 3000);
  };

  useEffect(() => {
    if (showToast) {
      const showToastTimeout = setTimeout(() => {
        setShowToast(false);
        clearTimeout(showToastTimeout);
      }, 3000);
    }
  }, [showToast]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className=" w-full max-w-3xl mx-auto grid grid-rows-[auto_1fr_auto] gap-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          type={Inputs.Text}
          id=""
          name=""
          label="Full Name"
          placeholder="Enter your name"
          required
        />
        <Input
          type={Inputs.Email}
          id=""
          name=""
          label="Email Address"
          placeholder="Enter your email address"
          required
        />
      </div>
      <Input
        type={Inputs.TextArea}
        id=""
        name=""
        label="Message"
        placeholder="Enter your message"
        required
      />

      {/* Submit Buttond */}
      <Button
        type="submit"
        variant={ButtonVariants.PrimaryFilled}
        isLoading={isLoading}
        disabled={isLoading}
      >
        <IoIosSend className="text-2xl" />
        Send Mail
      </Button>

      <div
        className={`bg-secondary rounded-md p-5 fixed bottom-10 grid grid-cols-[auto_1fr] gap-3 items-center overflow-hidden transition-all ${
          showToast ? "right-5" : "-right-full"
        }`}
      >
        <FaCircleCheck className="text-green-600 text-lg" />
        <p className="text-gray-700">Success! Your email has been sent.</p>
        <span
          className={`block h-1 bg-gray-300 absolute bottom-0 right-0 transition-all duration-[3000ms] ${
            showToast ? "w-0" : "w-full"
          }`}
        ></span>
      </div>
    </form>
  );
}
