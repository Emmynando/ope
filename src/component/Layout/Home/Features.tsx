"use client";
import Button from "@/component/UI/elements/Button";
import { inter_bold, inter_light } from "@/utils/fonts";
import { ArrowCircleRight } from "@phosphor-icons/react";
import CreatAccount from "@/assests/icons/createAccount.svg";
import CreatPort from "@/assests/icons/createPortfolio.svg";
import Earn from "@/assests/icons/startEarning.svg";
import Image from "next/image";

export default function Features() {
  return (
    <main className="p-4 lg:p-6 ">
      <section>
        <h2
          className={`text-4xl md:text-center lg:text-center my-2 ${inter_bold.className}`}>
          {" "}
          Our Features
        </h2>
        <p
          className={`text-sm text-left md:text-center lg:text-center lg:text-base ${inter_light.className}
           mx-auto lg:w-[60%]`}>
          {" "}
          With out team of professional traders, versed in crypto trading,
          market and chart movement, here are sure 3 steps guaranteed to earn
          you returns on your portfolio
        </p>
      </section>
      <section className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mt-[1rem] lg:mt-[2rem]">
        <div>
          <span className="size-14 my-2 bg-white rounded-full flex items-center justify-center">
            <Image
              src={CreatAccount}
              alt="Create Account"
              width={30}
              height={30}
            />
          </span>

          <h3
            className={`text-base mt-4 md:mt-0 lg:mt-0 mb-2 ${inter_bold.className}`}>
            Create an Account
          </h3>
          <p className={`text-sm text-gray-400 ${inter_light.className}`}>
            Begin by Creating an account on our platform. By clicking on the
            sigup button, we quarantee maximum security on our platform
          </p>
        </div>
        <div>
          <span className="size-14 my-2 bg-white rounded-full flex items-center justify-center">
            <Image
              src={CreatPort}
              alt="Create Account"
              width={30}
              height={30}
            />
          </span>
          <h3
            className={`text-base mt-4 md:mt-0 lg:mt-0 mb-2 ${inter_bold.className}`}>
            Create a Portfolio
          </h3>
          <p className={`text-sm text-gray-400 ${inter_light.className}`}>
            Create a protfolio by making a deposit. Your capital is secured and
            with a minimum of $5000, you begin to earn profit!
          </p>
        </div>
        <div>
          <span className="size-14 my-2 bg-white rounded-full flex items-center justify-center">
            <Image src={Earn} alt="Create Account" width={30} height={30} />
          </span>
          <h3
            className={`text-base mt-4 md:mt-0 lg:mt-0 mb-2 ${inter_bold.className}`}>
            Start Earning
          </h3>
          <p className={`text-sm text-gray-400 ${inter_light.className}`}>
            With the guidance of our professional you are guaranteed to maximize
            when a deposit is made, with a profit of over 100% daily.
          </p>
        </div>
      </section>
      <Button
        text="Get Started"
        onClick={() => console.log("here")}
        containerClass="!mt-[2rem] mx-auto"
        rightIcon={<ArrowCircleRight size={22} />}
      />
    </main>
  );
}
