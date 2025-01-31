"use client";

import { useEffect, useRef } from "react";

export default function Ticker() {
  const runTime = useRef(0);

  useEffect(() => {
    if (runTime.current < 1) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: "FOREXCOM:SPXUSD",
            title: "S&P 500 Index",
          },
          {
            proName: "FOREXCOM:NSXUSD",
            title: "US 100 Cash CFD",
          },
          {
            proName: "FX_IDC:EURUSD",
            title: "EUR to USD",
          },
          {
            proName: "BITSTAMP:BTCUSD",
            title: "Bitcoin",
          },
          {
            proName: "BITSTAMP:ETHUSD",
            title: "Ethereum",
          },
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: "adaptive",
        colorTheme: "light",
        locale: "en",
      });

      const container = document.getElementById("tradingview-ticker-container");

      container?.appendChild(script);
      runTime.current = 1;
    }
  }, []);

  return (
    <div
      id="tradingview-ticker-container"
      className="tradingview-widget-container"
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}
