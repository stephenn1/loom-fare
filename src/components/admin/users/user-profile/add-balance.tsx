import { TransactionStatus } from "@/@types";
import { db } from "@/config/firebase";
import { v4 as uuidV4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { User } from "@/store/slices/user.slice";

interface AddBalanceProps {
  user: User | { [field: string]: any };
  refresh: () => void;
}

export default function AddBalance({ user, refresh }: AddBalanceProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isAddingBalance, setIsAddingBalance] = useState(false);

  const handleAddBalance = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsAddingBalance(true);
    const formData = new FormData(e.currentTarget);
    const amount = Number(formData.get("amount"));
    const source = formData.get("source") as string;

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
      transactions: [
        {
          id: uuidV4(),
          type: "incoming",
          amount,
          source,
          date: finalFormattedDate,
          status: TransactionStatus.Successful,
        },
        ...user.transactions,
      ],
    }).catch(() => {});

    setIsAddingBalance(false);
    refresh();
    formRef.current?.reset();
  };

  return (
    <div className="content-start h-full grid gap-2">
      <label className="text-sm font-semibold text-gray-400 grid grid-flow-col w-max items-center gap-3">
        <IoIosAddCircle className="text-xl" />
        Add Balance
      </label>

      <form ref={formRef} onSubmit={handleAddBalance} className="grid gap-5">
        <div className="grid gap-3">
          <input
            id={"source"}
            name={"source"}
            type={"text"}
            placeholder={"Source"}
            className="outline-none w-full bg-white border border-gray-300 rounded-lg px-5 py-3"
          />

          <input
            id={"amount"}
            name={"amount"}
            type={"number"}
            placeholder={"Amount"}
            className="outline-none w-full bg-white border border-gray-300 rounded-lg px-5 py-3"
          />
        </div>
        <button
          disabled={isAddingBalance}
          className={`text-sm bg-primary text-white px-y py-3 w-40 rounded-lg font-semibold grid place-content-center justify-self-end ${
            isAddingBalance && "opacity-60"
          }`}
        >
          {isAddingBalance ? (
            <span className="block w-4 h-4 rounded-full border border-white border-b-transparent animate-spin"></span>
          ) : (
            "Add Balance"
          )}
        </button>
      </form>
    </div>
  );
}
