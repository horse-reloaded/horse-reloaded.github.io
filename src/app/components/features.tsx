"use client";
import { useState } from "react";

interface FeatureCategory {
  key: string;
  title: string;
  tagline: string;
  points: string[];
}

const categories: FeatureCategory[] = [
  {
    key: "protections",
    title: "Crash Protections",
    tagline: "Keep your game running smoothly.",
    points: [
      "Protect against most Paid menus",
      "Stable and smooth experience",
      "Fast updates & feature requests",
      "Cleaner and more intuitive UI",
    ],
  },
  {
    key: "self",
    title: "Self Options",
    tagline: "Customize your experience.",
    points: [
      "Standard from the original repository",
      "God Mode",
      "Infinite Stamina & Infinite Ammo",
      "No Clip & Super Jump",
    ],
  },
  {
    key: "visual",
    title: "Visuals",
    tagline: "Player and world enhancements.",
    points: [
      "Improved ESP (no visual glitches or crashes)",
      "World customization",
      "Player tags & tracers",
      "Session info overlay",
    ],
  },
  {
    key: "crashes",
    title: "Advanced Griefing (Donator)",
    tagline: "Mess up with other modders, even paid ones.",
    points: [
      "Many different Crashes", 
      "Advanced Griefing", 
      "Discord Integration", 
      "And many More..."
    ],
  },
];

export default function FeaturesInteractive() {
  const [active, setActive] = useState<FeatureCategory>(categories[0]);

  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Powerful features. Built for everyone.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Pick a category to discover what Horse Reloaded unlocks.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <ul
          className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0"
          aria-label="Feature categories"
        >
          {categories.map((c) => {
            const isActive = c.key === active.key;
            return (
              <li key={c.key} className="flex-shrink-0 md:flex-shrink">
                <button
                  onClick={() => setActive(c)}
                  className={`relative w-full text-left rounded-xl px-4 py-3 transition group border text-sm sm:text-base backdrop-blur-md cursor-pointer ${
                    isActive
                      ? "bg-foreground text-background border-transparent shadow"
                      : "border-black/10 dark:border-white/15 hover:border-transparent hover:bg-black/[.05] dark:hover:bg-white/[.08]"
                  }`}
                  aria-current={isActive}
                >
                  <span className="font-medium flex items-center gap-2 truncate">
                    {c.title}
                    {c.key === "advanced" && (
                      <span className="text-[10px] font-semibold uppercase tracking-wide bg-foreground text-background px-2 py-0.5 rounded-full shadow-sm">
                        Pro
                      </span>
                    )}
                  </span>
                  <span
                    className={`block mt-1 text-xs leading-snug truncate ${
                      isActive
                        ? "text-background/80"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {c.tagline}
                  </span>
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-xl ring-2 ring-foreground/60 animate-pulse hidden md:block"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="md:col-span-8 relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/5 via-transparent to-black/5 dark:from-white/5 dark:via-transparent dark:to-white/5 pointer-events-none" />
          <div className="relative border border-black/10 dark:border-white/15 rounded-3xl p-8 md:p-10 backdrop-blur-lg bg-white/70 dark:bg-black/40 h-full">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              {active.title}
              {active.key === "advanced" && (
                <span className="text-[10px] font-semibold uppercase tracking-wide bg-foreground text-background px-2 py-0.5 rounded-full shadow-sm">
                  Pro
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-prose">
              {active.tagline}
            </p>
            <ul className="space-y-3">
              {active.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-3 text-sm sm:text-base"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-foreground to-foreground/70 text-background text-[11px] font-bold">
                    ✓
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
