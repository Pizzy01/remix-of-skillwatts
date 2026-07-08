import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { colors, radius, shadow, motion as tok } from "./tokens";

type ButtonVariant = "plasma" | "glass" | "fusion" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  plasma: {
    background: colors.plasma.DEFAULT,
    color: colors.obsidian[900],
    border: "none",
    boxShadow: shadow.glowPlasma,
    fontWeight: 600,
  },
  fusion: {
    background: colors.fusion.DEFAULT,
    color: colors.obsidian[900],
    border: "none",
    boxShadow: shadow.glowFusion,
    fontWeight: 600,
  },
  glass: {
    background: colors.white[5],
    color: colors.white.full,
    border: `1px solid ${colors.white[10]}`,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    fontWeight: 500,
  },
  ghost: {
    background: "transparent",
    color: colors.white[60],
    border: `1px solid ${colors.white[10]}`,
    fontWeight: 500,
  },
};

const hoverStyles: Record<ButtonVariant, object> = {
  plasma: {
    boxShadow: shadow.glowPlasmaStrong,
    scale: 1.02,
  },
  fusion: {
    boxShadow: `0 0 30px rgba(255,179,0,0.6)`,
    scale: 1.02,
  },
  glass: {
    background: colors.white[10],
    borderColor: colors.white[20],
    scale: 1.01,
  },
  ghost: {
    background: colors.white[5],
    color: colors.white.full,
    scale: 1.01,
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "10px 20px", fontSize: "0.8rem" },
  md: { padding: "14px 28px", fontSize: "0.875rem" },
  lg: { padding: "18px 36px", fontSize: "1rem" },
};

export const Button = ({
  children,
  variant = "plasma",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  style,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={hoverStyles[variant]}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: tok.duration.fast, ease: tok.easing.smooth }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: radius.full,
        cursor: "none",
        letterSpacing: "-0.01em",
        width: fullWidth ? "100%" : undefined,
        outline: "none",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </motion.button>
  );
};
