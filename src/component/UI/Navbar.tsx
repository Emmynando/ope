"use client";
import { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import { NAVLINKS } from "@/constants";
import Button from "./elements/Button";
import { List } from "@phosphor-icons/react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed inset-0 z-40 w-full transition ease-out delay-100 duration-500 px-4 py-2 h-max">
      <section className="flex justify-between items-center">
        <div
          className="cursor-pointer md:w-[33.33%] lg:w-[33.33%]"
          onClick={() => router.push("/")}>
          <span>Logo</span>
        </div>
        {isOpen && <MobileNav />}
        {/* navlinks */}
        <div className=" w-[33.33%] hidden md:flex lg:flex justify-center items-center">
          <ul className="text-sm hidden lg:flex justify-between gap-6 items-end w-max mx-auto">
            {NAVLINKS.map((link) => (
              <li key={link.id} className="">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex lg:flex md:w-[33.33%] lg:w-[33.33%] justify-end items-center">
          <Link
            href="/signin"
            className="py-2 px-4 font-semibold text-white transform active:scale-75 transition-transform">
            Sign In
          </Link>
          <Button
            text="REGISTER"
            containerClass=""
            onClick={() => router.push("/register")}
          />
        </div>
        <div className="md:hidden lg:hidden ">
          <List size={24} onClick={() => setIsOpen((prev) => !prev)} />
        </div>
      </section>
    </nav>
  );
}
