"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Withdrawals from "./withdrawals";
import Users from "./users";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="grid gap-5 sm:gap-10 content-start p-5 sm:p-10 h-full overflow-y-scroll overflow-x-hidden custom-scroll-bar">
      {/* Cards */}
      <Users />
      <Withdrawals value={user.balance} />
    </div>
  );
}
