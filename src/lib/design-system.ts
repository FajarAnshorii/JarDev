// ==========================================
// JARDEV BUILDER — DESIGN SYSTEM
// ==========================================

// === COLORS ===
export const colors = {
  // Brand Colors
  primary: "#6366F1",      // Indigo
  primaryDark: "#4F46E5",
  primaryLight: "#818CF8",

  secondary: "#8B5CF6",     // Purple
  secondaryDark: "#7C3AED",
  secondaryLight: "#A78BFA",

  accent: "#F59E0B",        // Amber/Gold
  accentDark: "#D97706",
  accentLight: "#FBBF24",

  // Background Colors (Dark Theme)
  background: "#0F0F23",   // Dark Navy
  backgroundLight: "#1A1A2E",
  backgroundLighter: "#252541",
  surface: "#16162D",
  surfaceHover: "#1E1E38",

  // Text Colors
  textPrimary: "#FFFFFF",
  textSecondary: "#E2E8F0",
  textMuted: "#94A3B8",
  textSubtle: "#64748B",

  // Status Colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Border & Dividers
  border: "#2D2D4A",
  borderLight: "#3D3D5C",
  divider: "#1E1E38",

  // Gradients
  gradient: {
    primary: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    secondary: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    accent: "linear-gradient(135deg, #F59E0B, #EF4444)",
    subtle: "linear-gradient(180deg, #0F0F23 0%, #1A1A2E 100%)",
    glow: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
  },
} as const;

// === TYPOGRAPHY ===
export const typography = {
  fontFamily: {
    sans: "var(--font-inter)",
    mono: "var(--font-jetbrains)",
    display: "var(--font-poppins)",
  },
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
    "7xl": "4.5rem",    // 72px
    "8xl": "6rem",      // 96px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// === SPACING ===
export const spacing = {
  px: "1px",
  0: "0",
  1: "0.25rem",   // 4px
  2: "0.5rem",    // 8px
  3: "0.75rem",   // 12px
  4: "1rem",      // 16px
  5: "1.25rem",   // 20px
  6: "1.5rem",    // 24px
  8: "2rem",      // 32px
  10: "2.5rem",   // 40px
  12: "3rem",     // 48px
  16: "4rem",     // 64px
  20: "5rem",     // 80px
  24: "6rem",     // 96px
  32: "8rem",     // 128px
} as const;

// === BORDER RADIUS ===
export const borderRadius = {
  none: "0",
  sm: "0.25rem",    // 4px
  md: "0.375rem",   // 6px
  lg: "0.5rem",     // 8px
  xl: "0.75rem",    // 12px
  "2xl": "1rem",    // 16px
  "3xl": "1.5rem",  // 24px
  full: "9999px",
} as const;

// === SHADOWS ===
export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  glow: "0 0 20px rgba(99, 102, 241, 0.3)",
  "glow-lg": "0 0 40px rgba(99, 102, 241, 0.5)",
  "glow-accent": "0 0 20px rgba(245, 158, 11, 0.3)",
} as const;

// === BREAKPOINTS ===
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// === ANIMATIONS ===
export const animations = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
} as const;

// === Z-INDEX ===
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  max: 999,
} as const;

// === TRANSITIONS ===
export const transitions = {
  all: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  colors: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// === EXPORT ALL ===
export const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  animations,
  zIndex,
  transitions,
} as const;

// === CONTAINER SIZES ===
export const containerWidth = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
  full: "100%",
} as const;
