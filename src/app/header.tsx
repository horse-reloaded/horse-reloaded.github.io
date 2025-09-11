import Button from "./components/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] dark:border-white/[.145] bg-white/70 dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center px-6 py-4 gap-4">
        <div className="flex items-center gap-2 shrink-0">
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

        <div className="flex-1 hidden sm:flex justify-center">
          <nav className="flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a
              href="#features"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Docs
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button size="sm" className="font-semibold">Download</Button>
        </div>
      </div>
    </header>
  );
}
