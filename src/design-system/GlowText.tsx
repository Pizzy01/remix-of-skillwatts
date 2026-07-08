import { motion } from "framer-motion";
import { ReactNode, ElementType } from "react";
import { colors, typography, motion as tok } from "./tokens";

type GlowColor = "plasma" | "fusion" | "reactor" | "white";
type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface GlowTextProps {
  children: ReactNode;
  as?: TextTag;
  color?: GlowColor;
  glow?: boolean;
  gradient?: boolean;
  animateIn?: boolean;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const colorValues: Record<GlowColor, string> = {
  plasma: colors.plasma.DEFAULT,
  fusion: colors.fusion.DEFAULT,
  reactor: colors.reactor.DEFAULT,
  white: colors.white.full,
};

const glowValues: Record<GlowColor, string> = {
  plasma: `0 0 20px rgba(0, 229, 255, 0.7), 0 0 40px rgba(0, 229, 255, 0.3)`,
  fusion: `0 0 20px rgba(255, 179, 0, 0.7), 0 0 40px rgba(255, 179, 0, 0.3)`,
  reactor: `0 0 20px rgba(0, 255, 102, 0.7), 0 0 40px rgba(0, 255, 102, 0.3)`,
  white: `0 0 20px rgba(255,255,255,0.3)`,
};

const gradientValues: Record<GlowColor, string> = {
  plasma: `linear-gradient(135deg, ${colors.plasma.DEFAULT} 0%, #ffffff 60%, ${colors.plasma.DEFAULT}88 100%)`,
  fusion: `linear-gradient(135deg, ${colors.fusion.DEFAULT} 0%, #ffffff 60%, ${colors.fusion.DEFAULT}88 100%)`,
  reactor: `linear-gradient(135deg, ${colors.reactor.DEFAULT} 0%, #ffffff 60%, ${colors.reactor.DEFAULT}88 100%)`,
  white: `linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)`,
};

export const GlowText = ({
  children,
  as: Tag = "span",
  color = "plasma",
  glow = true,
  gradient = false,
  animateIn = false,
  delay = 0,
  className = "",
  style,
}: GlowTextProps) => {
  const textStyle: React.CSSProperties = {
    fontFamily: typography.fontDisplay,
    letterSpacing: typography.tracking.display,
    ...(gradient
      ? {
          background: gradientValues[color],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }
      : {
          color: colorValues[color],
        }),
    ...(glow && !gradient
      ? { textShadow: glowValues[color] }
      : {}),
    ...style,
  };

  if (!animateIn) {
    const El = Tag as ElementType;
    return (
      <El className={className} style={textStyle}>
        {children}
      </El>
    );
  }

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.span;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={tok.viewport}
      transition={{ duration: tok.duration.slow, delay, ease: tok.easing.spring }}
      className={className}
      style={textStyle}
    >
      {children}
    </MotionTag>
  );
};

// Utility: split text into per-word animated spans
export const AnimatedWords = ({
  text,
  color = "white",
  delay = 0,
  className = "",
  style,
}: {
  text: string;
  color?: GlowColor;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={tok.viewport}
      variants={{
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
        hidden: {},
      }}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em", ...style }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: tok.easing.spring } },
          }}
          style={{ color: colorValues[color], display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
