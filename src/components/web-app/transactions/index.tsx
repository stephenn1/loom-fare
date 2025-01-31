"use client";

import React from "react";
import TransactionItem from "./transaction-item";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Transactions() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="bg-white content-start gap-5 rounded-r-lg grid h-full p-10 overflow-auto custom-scroll-bar">
      {user.transactions.map((t, i) => (
        <TransactionItem
          key={i}
          amount={t.amount}
          status={t.status}
          type={t.type}
          date={t.date}
          id={t.id}
          source={t.source}
        />
      ))}
    </div>
  );
}
