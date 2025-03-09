"use client";
import { useState } from "react";
import { inter_light, inter_medium } from "@/utils/fonts";
import Link from "next/link";
import { PaperPlaneRight } from "@phosphor-icons/react";

export default function Footer() {
  const [letter, setLetter] = useState("");
  const year = new Date().getFullYear();
  return (
    <main className="p-4 lg:p-6">
      <p className={`text-xs text-gray-400 ${inter_light.className}`}>
        Welcome to [Broker Company Name], your trusted partner in navigating the
        world of investments. Our team of experienced brokers is dedicated to
        providing profitable service, expert advice, and innovative solutions to
        help you build your portfolio achieve your financial goals. Whether
        you're a seasoned investor or just starting out, we're here to guide you
        every step of the way.
      </p>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-[1rem]">
        <div>
          <h4
            className={`text-sm mb-[0.5rem] ${inter_medium.className} w-max border-b border-b-[#0284E2]`}>
            About Company
          </h4>
          <p className={`text-gray-400 text-xs ${inter_light.className}`}>
            [broker name] is a leading investment platform with leading
            professional traders in United States managing profitability of our
            clients cryptocurrency portfolio through number of successful daily
            trades
          </p>
        </div>
        <div>
          <h4
            className={`text-sm mb-[0.5rem] ${inter_medium.className} w-max border-b border-b-[#0284E2]`}>
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            <Link
              href=""
              className={`text-gray-400 text-xs w-max ${inter_light.className}`}>
              Home
            </Link>
            <Link
              href=""
              className={`text-gray-400 text-xs w-max ${inter_light.className}`}>
              Login
            </Link>
            <Link
              href=""
              className={`text-gray-400 text-xs w-max ${inter_light.className}`}>
              Register
            </Link>
          </ul>
        </div>
        <div>
          <h4
            className={`text-sm mb-[0.5rem] ${inter_medium.className} w-max border-b border-b-[#0284E2]`}>
            Newsletter
          </h4>
          <p
            className={`text-gray-400 text-xs w-max ${inter_light.className} mb-[0.5rem]`}>
            Subscribe for Updates
          </p>
          <div className="flex items-center bg-white rounded-md p-1">
            <input
              className={`font-semibold flex-1 bg-white text-black text-xs ${inter_light.className} outline-none`}
              type="text"
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
              placeholder="email"
            />
            <button
              className="p-2 text-gray-600 hover:text-black transition-colors"
              onClick={() => {
                // Handle send action here
                console.log("Sending:", letter);
              }}>
              <PaperPlaneRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <p className={`text-xs text-gray-400 text-center mt-[2rem]`}>
        Copyright © {year} All Rights Reserved
      </p>
    </main>
  );
}
