"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "accent2" | "purple" | "pink";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-nexus-card border border-nexus-border text-nexus-secondary",
    accent: "bg-nexus-accent/10 border border-nexus-accent/20 text-nexus-accent",
    accent2:
      "bg-nexus-accent2/10 border border-nexus-accent2/20 text-nexus-accent2",
    purple: "bg-purple-500/10 border border-purple-500/20 text-purple-400",
    pink: "bg-pink-500/10 border border-pink-500/20 text-pink-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
