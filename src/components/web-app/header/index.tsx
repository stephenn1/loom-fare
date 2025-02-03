"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button, ButtonVariants, Modal } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { setUser } from "@/store/slices/user.slice";
import UserDetails from "./user-details";
import { FaCheck } from "react-icons/fa6";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const path = usePathname()?.split("/").join("");

  const [agreed, setAgreed] = useState(false);

  const handleDeposit = async () => {
    dispatch(
      setUser({
        ...user,
        prompt: { ...user.prompt, seen: true },
        agreedToTerms: true,
      })
    );

    await setDoc(doc(db, "users", user.email), {
      ...user,
      prompt: { ...user.prompt, seen: true },
      agreedToTerms: true,
    }).then(() => {
      router.push("/exchange?active_tab=deposit");
    });
  };

  const handleContinue = async () => {
    dispatch(
      setUser({
        ...user,
        prompt: { ...user.prompt, seen: true },
        agreedToTerms: true,
      })
    );

    await setDoc(doc(db, "users", user.email), {
      ...user,
      prompt: { ...user.prompt, seen: true },
      agreedToTerms: true,
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

          {user.prompt?.note && (
            <p className="text-lg text-gray-500 text-center whitespace-pre-wrap">
              <span className="font-semibold text-gray-900">Note:</span>{" "}
              {user.prompt.note}
            </p>
          )}
          {!user?.agreedToTerms && (
            <div className="max-w-max mx-auto grid grid-flow-col items-center gap-3">
              <button
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 border rounded-md grid place-content-center transition-all ${
                  agreed
                    ? "bg-primary border-primary"
                    : "bg-whiteborder-gray-400"
                }`}
              >
                <FaCheck className={`text-xs text-white`} />
              </button>
              <p className="text-gray-500 text-sm">I agree to these terms</p>
            </div>
          )}
          <div
            className={`grid ${!user?.agreedToTerms && "grid-cols-2 gap-3"}`}
          >
            {!user?.agreedToTerms && (
              <Button
                onClick={handleDeposit}
                variant={ButtonVariants.PrimaryOutlined}
                className="mt-5"
                disabled={!agreed}
              >
                Make a Deposit
              </Button>
            )}
            <Button
              onClick={handleContinue}
              variant={ButtonVariants.PrimaryFilled}
              className="mt-5"
              disabled={!agreed && !user?.agreedToTerms}
            >
              Continue to Dashboard
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
