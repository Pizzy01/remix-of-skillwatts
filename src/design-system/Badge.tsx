import { motion } from "framer-motion";
import { ReactNode } from "react";
import { colors, radius, motion as tok } from "./tokens";

type BadgeColor = "plasma" | "fusion" | "reactor";

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  ping?: boolean;
  animateIn?: boolean;
  delay?: number;
  className?: string;
}

const colorMap: Record<BadgeColor, { text: string; bg: string; border: string; ping: string }> = {
  plasma: {
    text: colors.plasma.DEFAULT,
    bg: colors.plasma.muted,
    border: colors.plasma.border,
    ping: colors.plasma.DEFAULT,
  },
  fusion: {
    text: colors.fusion.DEFAULT,
    bg: colors.fusion.muted,
    border: colors.fusion.border,
    ping: colors.fusion.DEFAULT,
  },
  reactor: {
    text: colors.reactor.DEFAULT,
    bg: colors.reactor.muted,
    border: colors.reactor.border,
    ping: colors.reactor.DEFAULT,
  },
};

export const Badge = ({
  children,
  color = "plasma",
  ping = false,
  animateIn = true,
  delay = 0,
  className = "",
}: BadgeProps) => {
  const c = colorMap[color];

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 8 } : false}
      whileInView={animateIn ? { opacity: 1, y: 0 } : undefined}
      viewport={tok.viewport}
      transition={{ duration: tok.duration.base, delay, ease: tok.easing.spring }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 16px",
        borderRadius: radius.full,
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        fontSize: "0.65rem",
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
      className={className}
    >
      {ping && (
        <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: c.ping,
              opacity: 0.75,
              animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: c.ping,
            }}
          />
        </span>
      )}
      {children}
    </motion.div>
  );
};
