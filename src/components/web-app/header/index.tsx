"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button, ButtonVariants, Modal } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { setUser } from "@/store/slices/user.slice";
import UserDetails from "./user-details";
// import Translator from "@/components/translator";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const path = usePathname()?.split("/").join("");

  const handleContinue = async () => {
    dispatch(
      setUser({
        ...user,
        prompt: { ...user.prompt, seen: true },
      })
    );

    await setDoc(doc(db, "users", user.email), {
      ...user,
      prompt: { ...user.prompt, seen: true },
    }).then(() => {});
  };

  return (
    <>
      {/* <div>
        <Translator /> */}
      <header className="layout-spacing py-3 sm:py-5 grid grid-flow-col items-center justify-between bg-white border-b border-gray-200">
        <span className="relative block lg:hidden w-10">
          <Image
            src={"/logo.svg"}
            width={300}
            height={300}
            layout="responsive"
            alt="Logo"
          />
        </span>

        <h2 className="font-bold text-gray-800 text-xl sm:text-2xl capitalize">
          {path}
        </h2>

        <UserDetails />
      </header>

      {/* Prompt */}
      <Modal isModal={Boolean(user?.id && !user?.prompt?.seen)}>
        <div className="grid gap-5">
          <p className="font-bold text-center text-xl">{user.prompt.title}</p>
          <p className="text-lg text-gray-500 text-center whitespace-pre-wrap">
            {user.prompt.message}
          </p>

          <Button
            onClick={handleContinue}
            variant={ButtonVariants.PrimaryFilled}
            className="mt-5"
          >
            Continue to Dashboard
          </Button>
        </div>
      </Modal>
    </>
  );
}
