"use client";
import Button from "./button";
import { useCallback, useRef, useState } from "react";

type Plan = "terminus" | "horsereloaded" | "horsedonator";

interface PlanFeature {
  label: string;
  proOnly?: boolean;
  exclude?: Plan[];
}

const features: PlanFeature[] = [
  { label: "Crash Protections" },
  { label: "Cloud Features", exclude: ["terminus"] },
  { label: "Self" },
  // { label: "Teleport" },
  { label: "Network" },
  { label: "Players" },
  // { label: "World" }, // No need to show everything
  { label: "Recovery" },
  { label: "Settings" },
  { label: "Advanced Griefing", proOnly: true },
  { label: "Feature Request", proOnly: true },
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
  const terminusGlow = useGlow();
  const freeGlow = useGlow();
  const proGlow = useGlow();
  const [proMode, setProMode] = useState<"monthly" | "lifetime">("monthly");

  const featureActive = (f: PlanFeature, plan: Plan) => {
    if (plan === "horsedonator") return true; // Pro gets everything
    if (f.proOnly) return false;
    if (f.exclude && f.exclude.includes(plan)) return false;
    return true;
  };

  const crashBadge = (plan: Plan) => {
    if (plan === "terminus")
      return { label: "Medium", className: "text-orange-500" };
    return { label: "Top", className: "text-green-400" };
  };

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Simple and Free
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Use everything Horse Reloaded has to offer for free, or support us and
          unlock even more.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div
          ref={terminusGlow.ref}
          onMouseEnter={terminusGlow.onMouseEnter}
          onMouseMove={terminusGlow.onMouseMove}
          onMouseLeave={terminusGlow.onMouseLeave}
          className="relative flex flex-col border border-black/10 dark:border-white/15 rounded-3xl p-8 bg-white/60 dark:bg-black/30 backdrop-blur-md overflow-hidden"
          style={{ ["--mx" as any]: "50%", ["--my" as any]: "50%" }}
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: terminusGlow.active ? 1 : 0,
              background:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.38), rgba(255,255,255,0.04) 55%, transparent 70%)",
              mixBlendMode: "screen",
            }}
          />
          <CardEdges variant="light" />
          <div className="mb-6 min-h-[90px]">
            <h3 className="text-xl font-semibold mb-1">Terminus</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Best open source mod menu, made by the community, but also lost by
              maintainers.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-sm text-gray-500">forever</span>
            </div>
            <Button className="w-full" variant="secondary">
              Get
            </Button>
          </div>
          <ul className="space-y-3 text-sm relative z-10">
            {features.map((f) => {
              const plan: Plan = "terminus";
              const active = featureActive(f, plan);
              const badge =
                f.label === "Crash Protections" ? crashBadge(plan) : null;
              return (
                <li key={f.label} className="flex items-start gap-2">
                  <Check active={active} />
                  <span className={!active ? "text-gray-500 line-through" : ""}>
                    {f.label}
                    {badge && (
                      <span
                        className={`ml-1 text-[10px] uppercase tracking-wide font-semibold ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    )}
                    {f.proOnly && !active && (
                      <span className="ml-1 text-[9px] uppercase tracking-wide bg-foreground/80 text-background px-1 rounded font-semibold">
                        Pro
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

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
          <div className="mb-6 min-h-[90px]">
            <h3 className="text-xl font-semibold mb-1">Horse Reloaded</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A fork of Terminus, with improved stability, features and
              protections.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-sm text-gray-500">forever</span>
            </div>
            <Button className="w-full" variant="secondary">
              Download
            </Button>
          </div>
          <ul className="space-y-3 text-sm relative z-10">
            {features.map((f) => {
              const plan: Plan = "horsereloaded";
              const active = featureActive(f, plan);
              const badge =
                f.label === "Crash Protections" ? crashBadge(plan) : null;
              return (
                <li key={f.label} className="flex items-start gap-3">
                  <Check active={active} />
                  <span className={!active ? "text-gray-500 line-through" : ""}>
                    {f.label}
                    {badge && (
                      <span
                        className={`ml-1 text-[10px] uppercase tracking-wide font-semibold ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    )}
                    {f.proOnly && !active && (
                      <span className="ml-1 text-[10px] uppercase tracking-wide bg-foreground/90 text-background px-1.5 py-0.5 rounded-full font-semibold">
                        Pro
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
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

          <div className="mb-6 min-h-[90px]">
            <h3 className="text-xl font-semibold mb-1">Reloaded Donator</h3>
            <p className="text-sm text-white/60">
              An improved version of Horse Reloaded, with crashes and griefing
              against Paid mod menus.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex">
              {proMode === "monthly" ? (
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl font-bold">€3</span>
                  <span className="text-sm opacity-80">/month</span>
                </div>
              ) : (
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl font-bold">€10</span>
                  <span className="text-sm opacity-80">lifetime</span>
                </div>
              )}

              <div className="flex items-center justify-between mb-4 ml-auto">
                <div className="inline-flex rounded-md overflow-hidden border border-white/15 text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() => setProMode("monthly")}
                    className={`px-3 py-1.5 transition-colors cursor-pointer ${
                      proMode === "monthly"
                        ? "bg-white text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setProMode("lifetime")}
                    className={`px-3 py-1.5 transition-colors border-l border-white/15 cursor-pointer ${
                      proMode === "lifetime"
                        ? "bg-white text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Lifetime
                  </button>
                </div>
              </div>
            </div>
            <Button
              className="w-full bg-white text-black hover:bg-white/90"
              variant="primary"
            >
              {proMode === "monthly" ? "Subscribe" : "Get Lifetime"}
            </Button>
          </div>
          <ul className="space-y-3 text-sm relative z-10">
            {features.map((f) => {
              const plan: Plan = "horsedonator";
              const badge =
                f.label === "Crash Protections"
                  ? crashBadge(plan)
                  : f.label == "Advanced Griefing"
                  ? {
                      label: "Crashes",
                      className:
                        "bg-foreground text-background px-1.5 py-0.5 rounded-full font-semibold ml-1 text-[10px] uppercase tracking-wide",
                    }
                  : null;
              return (
                <li key={f.label} className="flex items-start gap-3">
                  <Check active={true} />
                  <span>
                    {f.label}
                    {badge && (
                      <span
                        className={`ml-1 text-[10px] uppercase tracking-wide font-semibold ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">
        All features included in Terminus are completely free, we include the
        donator version to pay for cloud features and continue development.
      </p>
    </section>
  );
}
