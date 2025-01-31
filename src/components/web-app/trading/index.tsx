"use client";

import React from "react";
import Chart from "./chart";
import TradeHistory from "./trade-history";
import Investment from "./investment";

export default function Trading() {
  return (
    <div className="h-full grid grid-rows-[1fr_auto] md:grid-cols-[1fr_auto]">
      <Chart />
      <div className="grid gap-5 h-full px-5 md:grid-rows-[auto_1fr] md:w-[250px]">
        <Investment />
        <TradeHistory />
      </div>
    </div>
  );
}
