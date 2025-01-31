"use client";
import Details from "@/components/web-app/exchange/deposit/details";
import React from "react";

export default function WalletAddress() {
  return (
    <main className="px-4 lg:px-8">
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
        <h4>Tips</h4>
        <ol className="space-y-3 text-base sm:text-lg">
          <li>
            This is your wallet address. Please make the deposit to reactivate
            your account.
          </li>
          <li>
            Once the deposit is successfully made and confirmed, your account
            will be reactivated automatically.
          </li>
          <li>
            Your deposit will be reflected in your account balance upon
            activation.
          </li>
          <li>
            Double-check the wallet address or QR code before making the
            transfer.
          </li>
          <li>
            Deposits made to the wrong wallet address cannot be recovered.
          </li>
          <li>
            Transactions may take a few minutes to hours depending on network
            traffic.
          </li>
        </ol>
      </div>
    </main>
  );
}
