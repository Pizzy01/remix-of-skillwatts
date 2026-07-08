import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { colors, motion as tok } from "./tokens";

type StatColor = "plasma" | "fusion" | "reactor";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  color?: StatColor;
  delay?: number;
  suffix?: string;
  animateCount?: boolean;
}

const colorMap: Record<StatColor, string> = {
  plasma: colors.plasma.DEFAULT,
  fusion: colors.fusion.DEFAULT,
  reactor: colors.reactor.DEFAULT,
};

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

export const StatCard = ({
  icon,
  label,
  value,
  color = "plasma",
  delay = 0,
  animateCount = true,
}: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, tok.viewport);

  const numericMatch = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  const numericPart = numericMatch ? parseFloat(numericMatch[1]) : null;
  const suffix = numericMatch ? numericMatch[2] : value;
  const count = useCountUp(numericPart ?? 0, 1.5, animateCount && inView && numericPart !== null);

  const displayValue =
    animateCount && numericPart !== null && inView
      ? `${count}${suffix}`
      : value;

  return (
    <div ref={ref}>
      <GlassCard glow={color} delay={delay} style={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: colors.white[5],
              border: `1px solid ${colors.white[5]}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colorMap[color],
            }}
          >
            {icon}
          </div>
          <div
            style={{
              fontSize: "0.65rem",
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: colors.white[40],
            }}
          >
            {label}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: tok.duration.base, delay: delay + 0.2 }}
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: colors.white[80],
          }}
        >
          {displayValue}
        </motion.div>
      </GlassCard>
    </div>
  );
};
