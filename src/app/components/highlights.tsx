import { ReactNode } from "react";

interface HighlightItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const items: HighlightItem[] = [
  {
    icon: <span className="text-xs">🛡</span>,
    title: "Crash Protections",
    description: "Protects against other mods. Stable and fast experience.",
  },
  {
    icon: <span className="text-xs">🎮</span>,
    title: "Player",
    description: "God Mode, Infinite Stamina, Infinite Ammo.",
  },
  {
    icon: <span className="text-xs">🧭</span>,
    title: "Utilities",
    description: "Anti AFK, No Clip, Super Jump para exploración.",
  },
  {
    icon: <span className="text-xs">👁</span>,
    title: "Visuals",
    description: "Player ESP, customization and ambient tweaks, night vision.",
  },
  {
    icon: <span className="text-xs">🧨</span>,
    title: "Advanced Crashes",
    description: "Disintegration, You Again?, ChuChu and many more.",
  },
  {
    icon: <span className="text-xs">⚡</span>,
    title: "Updates & Reliability",
    description: "Fast updates and reliable protections always active.",
  },
];

export default function Highlights() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="highlights-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[50vh] w-[80vw] bg-radial from-white/10 to-transparent blur-2xl opacity-30 dark:opacity-15 animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          {items.map((i) => (
            <div key={i.title} className="flex flex-col gap-2 max-w-sm">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur text-xs">
                  {i.icon}
                </span>
                <span>{i.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {i.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
