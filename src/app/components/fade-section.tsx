"use client";
import {
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
  ElementType,
} from "react";

interface FadeSectionProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
  /** If true the animation will replay each time it re-enters */
  repeat?: boolean;
  /** Optional delay (seconds) */
  delay?: number;
}

export default function FadeSection({
  as: Tag = "div",
  children,
  className = "",
  repeat = false,
  delay = 0,
}: FadeSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  const Comp: any = Tag;
  return (
    <Comp
      ref={ref as any}
      className={`fade-section ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Comp>
  );
}
