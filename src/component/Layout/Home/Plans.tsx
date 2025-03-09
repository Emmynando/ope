"use client";
import Button from "@/component/UI/elements/Button";
import { PLANS } from "@/constants";
import { inter_bold, inter_medium } from "@/utils/fonts";

export default function Plans() {
  return (
    <main className="p-4 lg:p-6 py-12 bg-white">
      <h2 className={`header-style ${inter_bold.className} text-[#000618]`}>
        Our Plans
      </h2>
      <section
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-6
      mt-[1rem] lg:mt-[2rem]">
        {PLANS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center">
            <h3
              className={`text-[#000618] font-semibold box-header uppercase ${inter_bold.className}`}>
              {item.plan}
            </h3>
            {/* cicle container */}
            <div
              className="flex flex-col items-center justify-around bg-[#0284E2] size-[17rem] 
          rounded-full relative shadow-4xl">
              <div>
                <p
                  className={`text-xl font-medium w-[90%] mx-auto text-center`}>
                  Maximum Deposit{" "}
                  <span className={` font-semibold ${inter_bold.className}`}>
                    {item.deposit}
                  </span>
                </p>
              </div>
              <div>
                <p
                  className={`font-medium text-base ${inter_medium.className} w-[90%] mx-auto text-center`}>
                  Maximum Leverage {item.leverage}
                </p>
              </div>
            </div>
            <span
              className={`font-bold text-black border p-2 my-2 rounded-md ${inter_medium.className}`}>
              Return on Investment{" "}
              <span className={` font-semibold ${inter_bold.className}`}>
                {item.returns}
              </span>
            </span>
            <button className="bg-[#000618] p-2 rounded-md">Choose Plan</button>
          </div>
        ))}
      </section>
    </main>
  );
}
