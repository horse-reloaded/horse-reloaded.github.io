"use client";
import Button from "./button";
import { useCallback, useRef, useState } from "react";

interface PlanFeature {
  label: string;
  proOnly?: boolean;
}

const features: PlanFeature[] = [
  { label: "Self" },
  { label: "Teleport" },
  { label: "Network" },
  { label: "Players" },
  { label: "World" },
  { label: "Recovery" },
  { label: "Settings" },
  { label: "Crashes", proOnly: true },
  { label: "Custom Support", proOnly: true },
];

function Check({ active }: { active: boolean }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
        active
          ? "bg-gradient-to-br from-foreground to-foreground/70 text-background"
          : "border border-black/15 dark:border-white/20 text-gray-400"
      }`}
      aria-hidden="true"
    >
      {active ? "✓" : ""}
    </span>
  );
}

interface GlowHandlers {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  ref: React.RefObject<HTMLDivElement>;
  active: boolean;
}

function useGlow(): GlowHandlers {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMouseEnter = useCallback(() => setActive(true), []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const xPct = (relX / rect.width) * 100;
    const yPct = (relY / rect.height) * 100;
    el.style.setProperty("--mx", `${xPct}%`);
    el.style.setProperty("--my", `${yPct}%`);
    const threshold = 120;
    el.style.setProperty(
      "--edge-t",
      Math.max(0, 1 - relY / threshold).toFixed(3)
    );
    el.style.setProperty(
      "--edge-l",
      Math.max(0, 1 - relX / threshold).toFixed(3)
    );
    el.style.setProperty(
      "--edge-b",
      Math.max(0, 1 - (rect.height - relY) / threshold).toFixed(3)
    );
    el.style.setProperty(
      "--edge-r",
      Math.max(0, 1 - (rect.width - relX) / threshold).toFixed(3)
    );
  }, []);

  const onMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  return {
    ref: ref as React.RefObject<HTMLDivElement>,
    active,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  };
}

function CardEdges({ variant }: { variant: "light" | "dark" }) {
  const baseColor = variant === "dark" ? "255,255,255" : "0,0,0";
  const strengthTop = variant === "dark" ? 0.2 : 0.15;
  const strengthSide = variant === "dark" ? 0.18 : 0.15;
  const strengthBottom = variant === "dark" ? 0.2 : 0.18;
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-x-0 top-0 h-10"
        style={{
          opacity: "var(--edge-t,0)",
          background: `linear-gradient(to bottom, rgba(${baseColor},${strengthTop}), transparent)`,
          transition: "opacity 500ms ease",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-10"
        style={{
          opacity: "var(--edge-r,0)",
          background: `linear-gradient(to left, rgba(${baseColor},${strengthSide}), transparent)`,
          transition: "opacity 500ms ease",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-10"
        style={{
          opacity: "var(--edge-b,0)",
          background: `linear-gradient(to top, rgba(${baseColor},${strengthBottom}), transparent)`,
          transition: "opacity 500ms ease",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-10"
        style={{
          opacity: "var(--edge-l,0)",
          background: `linear-gradient(to right, rgba(${baseColor},${strengthSide}), transparent)`,
          transition: "opacity 500ms ease",
        }}
      />
    </div>
  );
}

export default function Pricing() {
  const freeGlow = useGlow();
  const proGlow = useGlow();

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Simple pricing.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Start for free. Upgrade when you want more power.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div
          ref={freeGlow.ref}
          onMouseEnter={freeGlow.onMouseEnter}
          onMouseMove={freeGlow.onMouseMove}
          onMouseLeave={freeGlow.onMouseLeave}
          className="relative flex flex-col border border-black/10 dark:border-white/15 rounded-3xl p-8 bg-white/70 dark:bg-black/40 backdrop-blur-md overflow-hidden"
          style={{
            ["--mx" as any]: "50%",
            ["--my" as any]: "50%",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: freeGlow.active ? 1 : 0,
              background:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.55), rgba(255,255,255,0.05) 55%, transparent 70%)",
              mixBlendMode: "screen",
            }}
          />
          <CardEdges variant="light" />
          <h3 className="text-xl font-semibold mb-1">Free</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Essential tools for casual modding.
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-sm text-gray-500">forever</span>
          </div>
          <Button className="mb-8" variant="secondary">
            Download
          </Button>
          <ul className="space-y-3 text-sm flex-1 relative z-10">
            {features.map((f) => (
              <li key={f.label} className="flex items-start gap-3">
                <Check active={!f.proOnly} />
                <span className={f.proOnly ? "text-gray-500 line-through" : ""}>
                  {f.label}
                  {f.proOnly && (
                    <span className="ml-1 text-[10px] uppercase tracking-wide bg-foreground/90 text-background px-1.5 py-0.5 rounded-full font-semibold">
                      Pro
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={proGlow.ref}
          onMouseEnter={proGlow.onMouseEnter}
          onMouseMove={proGlow.onMouseMove}
          onMouseLeave={proGlow.onMouseLeave}
          className="relative flex flex-col border border-white/15 rounded-3xl p-8 bg-[radial-gradient(circle_at_top_left,_#1e1e1e,_#0d0d0d)] text-white shadow-xl overflow-hidden"
          style={{
            ["--mx" as any]: "50%",
            ["--my" as any]: "50%",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: proGlow.active ? 1 : 0,
              background:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.25), rgba(255,255,255,0.05) 60%, transparent 75%)",
              mixBlendMode: "screen",
            }}
          />
          <CardEdges variant="light" />

          <h3 className="text-xl font-semibold mb-1">Pro</h3>
          <p className="text-sm text-white/60 mb-6">
            Full power & automation for advanced users.
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-sm opacity-80">/month</span>
          </div>
          <Button
            className="mb-8 bg-white text-black hover:bg-white/90"
            variant="primary"
          >
            Go Pro
          </Button>
          <ul className="space-y-3 text-sm flex-1 relative z-10">
            {features.map((f) => (
              <li key={f.label} className="flex items-start gap-3">
                <Check active={true} />
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-white/50">
            Cancel anytime. Future modules included.
          </p>
        </div>
      </div>
    </section>
  );
}
