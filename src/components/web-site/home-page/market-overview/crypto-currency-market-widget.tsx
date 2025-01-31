"use client";

import { useEffect, useRef } from "react";

export default function CryptoCurrencyMarketWidget() {
  const runTime = useRef(0);

  useEffect(() => {
    if (runTime.current < 1) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "100%",
        defaultColumn: "overview",
        screener_type: "crypto_mkt",
        displayCurrency: "USD",
        colorTheme: "light",
        locale: "en",
        isTransparent: true,
      });

      const container = document.getElementById("tradingview-widget-container");

      container?.appendChild(script);
      runTime.current = 1;
    }
  }, []);

  return (
    <div
      id="tradingview-widget-container"
      className="h-[400px] sm:h-[500px] rounded-lg overflow-hidden bg-transparent border border-neutral-200"
    ></div>
  );
}
