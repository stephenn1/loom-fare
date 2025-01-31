"use client";

import React from "react";
import MiniChart from "./mini-chart";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import PortfolioBalance from "./portfolio-balance";
import TotalDeposit from "./total-deposit";
import Withdrawals from "./withdrawals";
import RecentTransactions from "./recent-transactions";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="grid gap-5 sm:gap-10 p-5 sm:p-10 h-full overflow-y-scroll overflow-x-hidden custom-scroll-bar">
      {/* Information */}
      <div className="grid gap-3">
        <h3 className="font-bold text-lg sm:text-2xl text-gray-700">
          Welcome, {user.firstName}
        </h3>
        <p className="text-sm sm:text-lg text-gray-600 max-w-3xl leading-[1.6]">
          We&apos;re thrilled to have you here. This is your gateway to a world
          of investment opportunities. Get ready to explore, invest, and watch
          your wealth grow. Your financial journey begins now. Happy investing!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-[repeat(3,_minmax(300px,_1fr))] gap-5 h-max overflow-x-auto custom-scroll-bar pb-3">
        <PortfolioBalance value={user.balance} />
        <TotalDeposit value={user.deposit} />
        <Withdrawals value={user.withdrawal} />
      </div>

      {/* Chart and Recent ACtivities */}
      <div className="grid gap-5 sm:gap-0 xl:grid-cols-[1fr_auto] xl:max-h-96">
        <RecentTransactions transactions={user.transactions} />
        <div className="bg-white p-5 rounded-xl xl:w-96 min-h-96 shadow-[3px_3px_10px_-7px_rgba(0,0,0,0.3)]">
          <MiniChart />
        </div>
      </div>
    </div>
  );
}
