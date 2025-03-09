"use client";
import Button from "@/component/UI/elements/Button";
import { useRouter } from "next/navigation";
import { ArrowCircleRight } from "@phosphor-icons/react";

export default function HeroSection() {
  const router = useRouter();
  return (
    <main className="h-dvh">
      <section>
        <h1 className="lg:text-6xl text-white font-bold text-center text-3xl space-y-1 mb-[0.5rem]">
          Invest Your <span className="text-[#00C3FD]">Crypto</span> Asset in a{" "}
          <span className="text-[#00C3FD]">Secured</span> Way{" "}
        </h1>
        <p
          className="mb-[1rem] text-white text-center md:text-left lg:text-left font-normal
         lg:text-lg text-sm md:leading-7">
          Enjoy the benefit of daily payout on your crypto investments. We help
          manage your portfolio, leveraging cryptocurrency market movements at
          over 90% profit margin, daily.
        </p>
        <Button
          text="Get Started"
          onClick={() => router.push("/register")}
          rightIcon={<ArrowCircleRight size={22} />}
        />
      </section>
      <section></section>
    </main>
  );
}
