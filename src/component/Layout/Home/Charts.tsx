"use client";
import { inter_bold } from "@/utils/fonts";
import React, { useEffect, useRef, memo } from "react";

const Charts: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    // Check if the script already exists
    if (container.current.querySelector("script[src*='tradingview.com']")) {
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "COINBASE:BTCUSDT",
          "interval": "15",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
    return () => {
      if (container.current && script.parentNode === container.current) {
        container.current.removeChild(script);
      }
    };
  }, []);
  return (
    <main className="h-dvh p-4 lg:p-6">
      <h2 className={`header-style ${inter_bold.className}`}>LIVE CHART</h2>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "30rem", width: "95%", display: "flex" }}>
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "15rem", width: "95%" }}></div>
      </div>
    </main>
  );
};

export default memo(Charts);
