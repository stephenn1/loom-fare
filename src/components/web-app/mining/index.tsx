import React from "react";
import Investment from "./investment";
import CryptoCurrencyMarketWidget from "./crypto-currency-market-widget";
import MiningContracts from "./mining-contracts";

export default function Mining() {
  return (
    <div className="h-full grid grid-rows-[auto_1fr] gap-5 p-5 overflow-y-auto">
      <div className="grid gap-5 h-full md:grid-cols-[auto_1fr]">
        <Investment />
        <MiningContracts />
      </div>
      <CryptoCurrencyMarketWidget />
    </div>
  );
}
