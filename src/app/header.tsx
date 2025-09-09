import Button from "./components/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] dark:border-white/[.145] bg-white/70 dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/vercel.svg" alt="Logo" width={32} height={32} />
          <span className="font-semibold text-lg tracking-tight">
            Horse Reloaded
          </span>
        </div>

        <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
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

        <div className="flex items-center gap-3">
          {/* <Button variant="outline" size="sm">
            Log in
          </Button> */}
          <Button size="sm">Download</Button>
        </div>
      </div>
    </header>
  );
}
