"use client";

import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "accent" | "accent2" | "purple" | "pink";
  hover?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "accent",
  hover = true,
}: GlowCardProps) {
  const glowColors = {
    accent: "hover:shadow-[0_0_40px_rgba(86,204,242,0.15)]",
    accent2: "hover:shadow-[0_0_40px_rgba(0,255,163,0.15)]",
    purple: "hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]",
    pink: "hover:shadow-[0_0_40px_rgba(244,114,182,0.15)]",
  };

  return (
    <div
      className={`relative bg-nexus-card/60 backdrop-blur-xl border border-nexus-border/50 rounded-2xl p-6 transition-all duration-300 ${
        hover
          ? `hover:border-nexus-accent/30 hover:-translate-y-1 ${glowColors[glowColor]}`
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
