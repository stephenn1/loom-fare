import React from "react";
import { Transaction } from "@/store/slices/user.slice";
import RecentTransactionsItem from "./recent-transactions-item";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <div className="overflow-hidden grid grid-rows-[auto_1fr] gap-5 order-1 xl:order-none">
      <div className="grid grid-flow-col gap-5 justify-between xl:pr-3 items-center">
        <p className="font-bold text-gray-700">Recent Transactions</p>
        <button className="text-gray-600 font-semibold text-sm">See All</button>
      </div>

      <div className="overflow-y-auto custom-scroll-bar grid gap-5 content-start xl:pr-3">
        {transactions.map((t, i) => (
          <RecentTransactionsItem
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
    </div>
  );
}
