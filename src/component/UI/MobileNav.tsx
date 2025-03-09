"use client";
import { NAVLINKS } from "@/constants/index";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./elements/Button";

const MobileNav = () => {
  const isAuthenticated = false;
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden lg:hidden fixed left-0 bottom-0 h-screen shadow-4xl right-0 top-[4.8rem] p-5 pt-3 overflow-y-auto
         bg-[#000618] text-sm z-[9999] border-b border-b-white/20 space-y-8 `}>
        <ul className="grid gap-2">
          {NAVLINKS.map((link, idx) => {
            return (
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10,
                }}
                key={link.id}
                className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 z-[9999] via-neutral-950 to-neutral-700">
                <Link
                  //   onClick={() => setIsOpen((prev: boolean) => !prev)}
                  className={
                    "flex items-center justify-between w-full p-5 rounded-xl bg-[#000618] text-white"
                  }
                  href={link.href}
                  //   href={route.href}
                >
                  <p className="mx-auto">{link.name}</p>
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <div className="text-sm flex flex-col items-center">
          {isAuthenticated ? (
            <button
              //   onClick={() => signOut()}
              className="flex items-center justify-center gap-2 font-semibold px-6 py-2.5 bg-lime-green rounded-3xl hover:opacity-70 w-4/5 transform active:scale-75 transition-transform">
              {/* <span>{Logout}</span> */}
              <span className="text-xs">Logout</span>
            </button>
          ) : (
            <div className="flex flex-col gap-4 w-4/5 uppercase text-sm">
              <button
                onClick={() => {
                  router.push("/signin");
                  //   setIsOpen(false);
                }}
                className="py-1.5 px-4 rounded-lg text-white text-center transform active:scale-75 transition-transform">
                Sign In
              </button>
              <Button
                onClick={() => {
                  router.push("/register");
                  //   setIsOpen(false);
                }}
                containerClass="!w-[100%] !items-center !justify-center !px-6 !py-2.5 !font-semibold"
                text="REGISTER"
              />
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
