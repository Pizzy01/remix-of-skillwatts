export const colors = {
  obsidian: {
    900: "#050505",
    800: "#0a0a0c",
    700: "#121214",
    600: "#1c1c1f",
  },
  plasma: {
    DEFAULT: "#00E5FF",
    glow: "rgba(0, 229, 255, 0.5)",
    muted: "rgba(0, 229, 255, 0.15)",
    border: "rgba(0, 229, 255, 0.2)",
    hover: "rgba(0, 229, 255, 0.3)",
  },
  fusion: {
    DEFAULT: "#FFB300",
    glow: "rgba(255, 179, 0, 0.5)",
    muted: "rgba(255, 179, 0, 0.15)",
    border: "rgba(255, 179, 0, 0.2)",
  },
  reactor: {
    DEFAULT: "#00FF66",
    glow: "rgba(0, 255, 102, 0.5)",
    muted: "rgba(0, 255, 102, 0.15)",
    border: "rgba(0, 255, 102, 0.2)",
  },
  white: {
    full: "#FAFAFA",
    80: "rgba(255,255,255,0.8)",
    60: "rgba(255,255,255,0.6)",
    40: "rgba(255,255,255,0.4)",
    20: "rgba(255,255,255,0.2)",
    10: "rgba(255,255,255,0.1)",
    5: "rgba(255,255,255,0.05)",
    2: "rgba(255,255,255,0.02)",
  },
} as const;

export const typography = {
  fontDisplay: "'Inter', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', Menlo, monospace",
  tracking: {
    display: "-0.04em",
    body: "-0.01em",
    mono: "0.12em",
  },
  lineHeight: {
    display: 1.1,
    body: 1.6,
  },
} as const;

export const radius = {
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const shadow = {
  glass: "0 4px 30px rgba(0,0,0,0.5)",
  glassHover: "0 8px 40px rgba(0,0,0,0.6)",
  glowPlasma: "0 0 20px rgba(0, 229, 255, 0.4)",
  glowPlasmaStrong: "0 0 30px rgba(0, 229, 255, 0.6)",
  glowFusion: "0 0 20px rgba(255, 179, 0, 0.4)",
  glowReactor: "0 0 20px rgba(0, 255, 102, 0.4)",
} as const;

export const motion = {
  easing: {
    spring: [0.16, 1, 0.3, 1] as [number, number, number, number],
    smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  duration: {
    fast: 0.3,
    base: 0.6,
    slow: 1.0,
    xslow: 1.4,
  },
  viewport: { once: true, margin: "-80px" } as const,
} as const;

export const glass = {
  base: {
    background: "rgba(20, 20, 22, 0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: radius.lg,
    boxShadow: shadow.glass,
  },
} as const;
