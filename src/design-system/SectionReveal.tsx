import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { motion as tok } from "./tokens";

type RevealDirection = "up" | "down" | "left" | "right" | "fade";
type StaggerVariant = "none" | "children";

interface SectionRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  stagger?: StaggerVariant;
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const directionVariants: Record<RevealDirection, { hidden: object; visible: object }> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const staggerContainerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export const SectionReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration,
  stagger = "none",
  staggerDelay = 0.1,
  className = "",
  style,
}: SectionRevealProps) => {
  const variants = directionVariants[direction];
  const resolvedDuration = duration ?? tok.duration.slow;

  if (stagger === "children") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={tok.viewport}
        variants={staggerContainerVariants(staggerDelay)}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={tok.viewport}
      variants={variants}
      transition={{
        duration: resolvedDuration,
        delay,
        ease: tok.easing.spring,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  direction = "up",
  duration,
  className = "",
  style,
}: {
  children: ReactNode;
  direction?: RevealDirection;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const variants = directionVariants[direction];
  const resolvedDuration = duration ?? tok.duration.slow;

  return (
    <motion.div
      variants={variants}
      transition={{ duration: resolvedDuration, ease: tok.easing.spring }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
