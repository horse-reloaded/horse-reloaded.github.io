import Button from "./components/button";
import FeaturesInteractive from "./components/features";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex flex-col flex-1">
        <section className="px-6 pt-16 pb-24 text-center bg-gradient-to-b from-transparent via-black/0 to-black/5 dark:to-white/5">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Horse Reloaded
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Redefine your Red Dead experience with a modern and safe mod
                menu.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Discord</Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Completely free crash protections
            </p>
          </div>
        </section>

        <FeaturesInteractive />

        <Highlights />

        <Pricing />
      </main>
    </div>
  );
}
