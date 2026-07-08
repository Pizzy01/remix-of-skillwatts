import { motion, HTMLMotionProps } from "framer-motion";
import { motion as m } from "framer-motion";
import { motion as motionDiv } from "framer-motion";
import { colors, glass, shadow, motion as tok } from "./tokens";

type GlowColor = "plasma" | "fusion" | "reactor" | "none";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  glow?: GlowColor;
  animateIn?: boolean;
  delay?: number;
  hover?: boolean;
  className?: string;
}

const glowMap: Record<GlowColor, string> = {
  plasma: colors.plasma.hover,
  fusion: colors.fusion.border,
  reactor: colors.reactor.border,
  none: "transparent",
};

const glowShadowMap: Record<GlowColor, string> = {
  plasma: `0 8px 40px rgba(0, 229, 255, 0.12)`,
  fusion: `0 8px 40px rgba(255, 179, 0, 0.12)`,
  reactor: `0 8px 40px rgba(0, 255, 102, 0.12)`,
  none: shadow.glassHover,
};

export const GlassCard = ({
  children,
  glow = "none",
  animateIn = true,
  delay = 0,
  hover = true,
  className = "",
  style,
  ...props
}: GlassCardProps) => {
  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 24 } : false}
      whileInView={animateIn ? { opacity: 1, y: 0 } : undefined}
      viewport={tok.viewport}
      transition={{
        duration: tok.duration.slow,
        delay,
        ease: tok.easing.spring,
      }}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: glowMap[glow],
              boxShadow: glowShadowMap[glow],
            }
          : undefined
      }
      style={{
        ...glass.base,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      className={className}
      {...props}
    >
      {/* Top edge highlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.div>
  );
};
