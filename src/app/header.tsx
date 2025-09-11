"use client";
import Button from "./components/button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [animKey, setAnimKey] = useState(0);
  const trigger = () => setAnimKey((k) => k + 1);

  const linkBase =
    "hover:text-black dark:hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] dark:border-white/[.145] bg-white/70 dark:bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/35">
      <div className="relative max-w-6xl mx-auto flex items-center px-6 py-4 gap-4">
        <span
          key={animKey}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-transparent via-black/70 dark:via-white/80 to-transparent animate-header-progress"
        />
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer select-none"
          onClick={trigger}
        >
          <Image
            src="/horse.svg"
            alt="Logo"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="font-semibold text-lg tracking-tight">
            Horse Reloaded
          </span>
        </div>

        <div className="flex-1 hidden sm:flex justify-center" onClick={trigger}>
          <nav className="flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#features" className={linkBase}>
              Features
            </a>
            <a href="#pricing" className={linkBase}>
              Pricing
            </a>
            <a href="#faq" className={linkBase}>
              FAQ
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3 shrink-0" onClick={trigger}>
          <Button size="sm" className="font-semibold">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
