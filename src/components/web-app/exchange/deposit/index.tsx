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
      <h4 className="font-bold text-xl">Tips</h4>
      <ol className="space-y-2 text-sm sm:text-base list-disc pl-5">
        <li>
          This is your unique wallet address for transactions. Use it to deposit
          funds into your wallet on this platform.
        </li>
        <li>
          All transactions sent to this wallet address will be credited to your
          account balance. You can use the funds on the platform or withdraw
          them later.
        </li>
        <li>
          You can deposit from an external source of your choice, such as
          CashApp, a Bitcoin ATM, or an exchange of you choice
        </li>
        <li>
          Ensure you copy the correct wallet address or scan the QR code before
          making a transfer. Deposits sent to the wrong address cannot be
          recovered.
        </li>
        <li>
          Transactions may take minutes to hours, depending on network traffic.
        </li>
        <li>For further assistance, contact support.</li>
      </ol>
    </div>
  );
}
