"use client";

import { RootState } from "@/store";
import { Button, ButtonVariants, Modal } from "@/ui";
import Link from "next/link";
import React, { useState } from "react";
import { FaBtc } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Investment() {
  const user = useSelector((state: RootState) => state.user);
  const [showModal, setShowModal] = useState(false);

  const handleToggleShowModal = () => {
    Number(user.deposit) < 300 && setShowModal(!showModal);
  };

  return (
    <div className="md:w-screen md:max-w-xs grid gap-5">
      <div className="w-full px-10 py-10 sm:py-16 rounded-lg bg-[#f7931a] bg-opacity-80">
        <p className="text-3xl sm:text-4xl text-white font-bold flex items-center gap-[8px]">
          {<FaBtc />} {0}.00
        </p>
      </div>

      <button
        onClick={handleToggleShowModal}
        className="py-3 bg-[#0faf59] rounded-md text-white w-full"
      >
        Buy Contract
      </button>

      <Modal isModal={showModal}>
        <div className="grid gap-5">
          <button onClick={handleToggleShowModal} className="ml-auto">
            <IoCloseCircleOutline className="text-black text-3xl" />
          </button>
          <p className="font-bold text-center text-xl">Mining Unavailable</p>
          <p className="text-lg text-gray-500 text-center">
            A deposit is required to purchase a contract. Please make a deposit
            to proceed.
          </p>

          <Link href={"/exchange"} className="grid">
            <Button
              onClick={handleToggleShowModal}
              variant={ButtonVariants.PrimaryFilled}
              className="mt-5"
            >
              Make Deposit
            </Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
