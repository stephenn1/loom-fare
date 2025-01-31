import { TransactionStatus } from "@/@types";
import { db } from "@/config/firebase";
import { v4 as uuidV4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { User } from "@/store/slices/user.slice";

interface AddDepositProps {
  user: User | { [field: string]: any };
  refresh: () => void;
}

export default function AddDeposit({ user, refresh }: AddDepositProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isAddingDeposit, setIsAddingDeposit] = useState(false);

  const handleAddDeposit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsAddingDeposit(true);
    const formData = new FormData(e.currentTarget);
    const amount = Number(formData.get("amount"));

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

    await setDoc(doc(db, "users", user.email), {
      ...user,
      balance: Number(user.balance) + amount,
      deposit: Number(user.deposit) + amount,
      transactions: [
        {
          id: uuidV4(),
          type: "deposit",
          amount,
          source: "External",
          date: finalFormattedDate,
          status: TransactionStatus.Successful,
        },
        ...user.transactions,
      ],
    }).catch(() => {});

    setIsAddingDeposit(false);
    refresh();
    formRef.current?.reset();
  };

  return (
    <div className="content-start h-full grid gap-2">
      <label className="text-sm font-semibold text-gray-400 grid grid-flow-col w-max items-center gap-3">
        <IoIosAddCircle className="text-xl" />
        Add Deposit
      </label>

      <form ref={formRef} onSubmit={handleAddDeposit} className="grid gap-5">
        <div className="grid gap-3">
          <input
            id={"amount"}
            name={"amount"}
            type={"number"}
            placeholder={"Amount"}
            className="outline-none w-full bg-white border border-gray-300 rounded-lg px-5 py-3"
          />
        </div>
        <button
          disabled={isAddingDeposit}
          className={`text-sm bg-primary text-white px-y py-3 w-40 rounded-lg font-semibold grid place-content-center justify-self-end ${
            isAddingDeposit && "opacity-60"
          }`}
        >
          {isAddingDeposit ? (
            <span className="block w-4 h-4 rounded-full border border-white border-b-transparent animate-spin"></span>
          ) : (
            "Add Deposit"
          )}
        </button>
      </form>
    </div>
  );
}
