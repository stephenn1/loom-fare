"use client";

import { db } from "@/config/firebase";
import { RootState } from "@/store";
import { Button, ButtonVariants, Input, Inputs, Modal } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import {
  CRYPTO_CURRENCIES,
  WITHDRAWAL_METHODS,
} from "@/constants/withdrawal-methods";
import Link from "next/link";
import { TransactionStatus } from "@/@types";
import ProcessingWithdrawal from "./processing-withdrawal";

export default function AccountDetails() {
  const user = useSelector((state: RootState) => state.user);
  const [showModal, setShowModal] = useState(
    Boolean(Number(user?.deposit) < 300)
  );

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [processingWithdrawal, setProcessingWithdrawal] = useState(false);

  const handleToggleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleToggleProcessingWithdrawal = () => {
    setProcessingWithdrawal(!processingWithdrawal);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Get the day number with ordinal suffix
    const day = date.getDate();
    const ordinalSuffix = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const finalFormattedDate = ordinalSuffix(day) + " " + formattedDate;

    const data = new FormData(e.currentTarget);
    const amount = Number(data.get("amount"));

    if (!paymentMethod) {
      setIsLoading(false);
      return;
    }

    await setDoc(doc(db, "users", user.email), {
      ...user,
      balance: Number(user.balance || 0) - amount,
      withdrawal: Number(user.withdrawal || 0) + amount,
      transactions: [
        {
          id: uuidV4(),
          type: "withdrawal",
          amount: amount,
          date: finalFormattedDate,
          source: paymentMethod,
          status: TransactionStatus.Processing,
        },
        ...user.transactions,
      ],
    });

    setIsLoading(false);
    setProcessingWithdrawal(true);
  };

  if (processingWithdrawal) {
    return (
      <ProcessingWithdrawal
        toggleProcessingWithdrawal={handleToggleProcessingWithdrawal}
      />
    );
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-2xl mx-auto w-full min-h-full grid grid-rows-[1fr_auto]"
      >
        <div className="grid content-start gap-5 p-5 rounded-lg bg-primary bg-opacity-10">
          <Input
            type={Inputs.Number}
            name="amount"
            id="amount"
            label="Amount"
            placeholder="Please input the withdrawal amount."
            required
          />

          <Input
            type={Inputs.Select}
            name="payment-method"
            label="Payment Method"
            placeholder="Select payment method"
            options={WITHDRAWAL_METHODS}
            onChange={setPaymentMethod}
            required
          />

          {paymentMethod === "Crypto Wallet" && (
            <>
              <Input
                type={Inputs.Select}
                name="crypto-currency"
                label="Crypto Currency"
                placeholder="Select crypto currency"
                options={CRYPTO_CURRENCIES}
                onChange={() => {}}
                required
              />

              <Input
                type={Inputs.Text}
                name="wallet-addres"
                id="wallet-address"
                label="Wallet Address"
                placeholder="Please enter your wallet address"
                required
              />
            </>
          )}

          {paymentMethod?.split("-")[0] === "Bank Transfer" && (
            <>
              <Input
                type={Inputs.Text}
                name="bank-name"
                id="bank-name"
                label="Bank Name"
                placeholder="Enter your bank name"
                required
              />

              <Input
                type={Inputs.Text}
                name="account-name"
                id="account-name"
                label="Account Name"
                placeholder="Enter your account name"
                required
              />

              <Input
                type={Inputs.Number}
                name="account-number"
                id="account-number"
                label="Account Number"
                placeholder="Enter your account number"
                required
              />
              <Input
                type={Inputs.Number}
                name="routing-number"
                id="routing-number"
                label="Routing Number"
                placeholder="Enter your Routing number"
                required
              />
            </>
          )}
        </div>

        <div>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            variant={ButtonVariants.PrimaryFilled}
            className="mx-auto w-full mt-5 py-3 px-20"
          >
            Proceed
          </Button>
        </div>
      </form>

      {/* Modal */}
      <Modal isModal={showModal}>
        <div className="grid gap-5">
          <p className="font-bold text-center text-xl">
            Withdrawal Unavailable
          </p>
          <p className="text-lg text-gray-500 text-center">
            To process a withdrawal, an initial deposit is required. Please make
            a deposit to enable your withdrawal request.
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
    </>
  );
}
