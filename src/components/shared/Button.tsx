"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-nexus-accent to-nexus-accent2 text-nexus-bg font-semibold hover:opacity-90 glow-accent",
    secondary:
      "bg-nexus-card border border-nexus-border text-nexus-text hover:border-nexus-accent/30 hover:bg-nexus-card/80",
    ghost: "text-nexus-secondary hover:text-nexus-text hover:bg-white/5",
    outline:
      "border border-nexus-accent/30 text-nexus-accent hover:bg-nexus-accent/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
