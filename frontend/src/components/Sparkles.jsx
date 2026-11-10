import { useMemo } from "react";

export const Sparkles = ({ count = 22 }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.4 + 1.4,
        delay: Math.random() * 6,
        dur: Math.random() * 3 + 2.5,
        gold: Math.random() > 0.32,
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="sparkle"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
            background: d.gold ? "#F1D77A" : "#ffffff",
            boxShadow: d.gold
              ? "0 0 6px 1px rgba(215,175,56,0.85)"
              : "0 0 6px 1px rgba(224,214,255,0.75)",
          }}
        />
      ))}
    </div>
  );
};
