import React from "react";
import Details from "./details";

export default function Deposit() {
  return (
    <div className="bg-white rounded-r-lg grid gap-10 content-start h-full py-5 px-5 overflow-auto custom-scroll-bar">
      <div className="grid gap-3">
        <p className="text-2xl font-medium">Deposit/Receive</p>
        <p className="text-sm sm:text-base text-gray-500 max-w-3xl">
          Effortlessly deposit and receive Bitcoin using the wallet address or
          QR code below. Once the transaction is complete, simply click the
          designated button to proceed.
        </p>
      </div>
      <Details />
    </div>
  );
}
