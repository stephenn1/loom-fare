import { TransactionStatus } from "@/@types";
import { db } from "@/config/firebase";
import { RootState } from "@/store";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import { getDate } from "@/utils/date.utils";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { FormEvent, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";

export default function Transfer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  const getUserData = async (userEmail: string) => {
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    setIsLoading(false);

    if (!docSnap.exists()) {
      setError(
        "Transaction failed: The recipient does not exist. Please check the details and try again"
      );
      return setIsLoading(false);
    }

    return docSnap.data();
  };

  const handleFormInputChange = () => {
    const formData = new FormData(formRef.current || undefined);
    const requiredFields = ["email", "amount"];
    const amount = Boolean(Number(formData.get("amount")));
    const isComplete = requiredFields.every((field) =>
      Boolean(formData.get(field))
    );
    setIsFormComplete(isComplete && amount);
  };

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError("");
    setIsSuccess(false);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const amount = Number(formData.get("amount"));
    const transactionId = uuidV4();

    const userData = await getUserData(email);

    if (userData?.deposit < 300) {
      setError(
        "Transaction failed: The recipient is not eligible to receive transfers. A minimum deposit is required."
      );

      await setDoc(doc(db, "users", user.email), {
        ...user,
        transactions: [
          {
            id: transactionId,
            type: "Transfer",
            amount,
            source: `${userData?.firstName} ${userData?.lastName}`,
            date: getDate(),
            status: TransactionStatus.Failed,
          },
          ...user?.transactions,
        ],
      });

      await setDoc(doc(db, "users", email), {
        ...userData,
        transactions: [
          {
            id: transactionId,
            type: "Receive",
            amount,
            source: `${user?.firstName} ${user?.lastName}`,
            date: getDate(),
            status: TransactionStatus.Failed,
          },
          ...userData?.transactions,
        ],
      });
      setIsLoading(false);
      return;
    }

    await setDoc(doc(db, "users", user.email), {
      ...user,
      balance: Number(user?.balance) - Number(amount),
      transactions: [
        {
          id: transactionId,
          type: "Transfer",
          amount,
          source: `${userData?.firstName} ${userData?.lastName}`,
          date: getDate(),
          status: TransactionStatus.Successful,
        },
        ...user?.transactions,
      ],
    });

    await setDoc(doc(db, "users", email), {
      ...userData,
      balance: Number(userData?.balance) + Number(amount),
      transactions: [
        {
          id: transactionId,
          type: "Receive",
          amount,
          source: `${user?.firstName} ${user?.lastName}`,
          date: getDate(),
          status: TransactionStatus.Successful,
        },
        ...userData?.transactions,
      ],
    });

    setIsSuccess(true);
    setIsLoading(false);
    formRef.current?.reset();
  };

  return (
    <div className="bg-white rounded-r-lg grid gap-5 sm:gap-10 content-start h-full py-5 px-5 overflow-auto custom-scroll-bar">
      <div className="grid gap-3">
        <p className="text-2xl font-medium">Share Funds</p>
        <p className="text-sm sm:text-base text-gray-500 max-w-3xl">
          Transfers can only be made to other Loomfare users. Please ensure the
          recipient has a Loomfare account before proceeding. If they
          haven&apos;t signed up yet, they will need to create an account to
          receive funds
        </p>
      </div>

      <form
        ref={formRef}
        onInput={handleFormInputChange}
        onSubmit={handleFormSubmission}
        className="max-w-2xl mx-auto w-full grid grid-rows-[auto_1fr_auto] gap-2"
      >
        <p className="font-semibold text-gray-400">
          Available Balance:{" "}
          <span className="text-gray-700">
            $
            {user?.balance.toLocaleString("en-Us", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </p>
        <div className="grid content-start gap-5 p-5 rounded-lg bg-primary bg-opacity-10">
          <Input
            type={Inputs.Text}
            name="email"
            id="email"
            label="Receivers Email / Wallet Address"
            placeholder="receiver's email with loomfare"
            required
          />
          <Input
            type={Inputs.Number}
            name="amount"
            id="amount"
            label="Amount"
            placeholder={"0.00"}
            required
          />
        </div>

        {error && (
          <div className="grid grid-cols-[auto_1fr] gap-2 text-red-400">
            <IoIosInformationCircleOutline className="mt-1" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {isSuccess && (
          <div className="grid grid-cols-[auto_1fr] gap-2 text-green-600">
            <FaCheckCircle className="mt-1" />
            <p className="text-sm">
              Transaction successful! Your funds have been transferred
              successfully.
            </p>
          </div>
        )}

        <div>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={!isFormComplete || isLoading}
            variant={ButtonVariants.PrimaryFilled}
            className="mx-auto w-full mt-5 py-3 px-20"
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
}
