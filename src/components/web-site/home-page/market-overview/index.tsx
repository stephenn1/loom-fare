"use client";

import React from "react";
import CryptoCurrencyMarketWidget from "./crypto-currency-market-widget";
import { motion } from "motion/react";

export default function MarketOverview() {
  return (
    <section id="services" className="pt-20 sm:pt-40 grid layout-spacing">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-primary"
      >
        Market Overview
      </motion.h2>

      <div className="custom-container grid gap-5 mt-10">
        {/* <Ticker /> */}
        <CryptoCurrencyMarketWidget />
      </div>
    </section>
  );
}
