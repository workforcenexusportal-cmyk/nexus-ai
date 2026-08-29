"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Bot,
  Brain,
  BarChart3,
  FileSearch,
  Code2,
  Factory,
  Wrench,
  Truck,
} from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Automation", href: "/services/ai-automation", icon: Zap },
      { label: "AI Agents", href: "/services/ai-agents", icon: Bot },
      {
        label: "Business Process Automation",
        href: "/services/business-process-automation",
        icon: Brain,
      },
      {
        label: "Predictive Analytics",
        href: "/services/predictive-analytics",
        icon: BarChart3,
      },
      {
        label: "Document Intelligence",
        href: "/services/document-intelligence",
        icon: FileSearch,
      },
      {
        label: "Custom Software",
        href: "/services/custom-software",
        icon: Code2,
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        icon: Factory,
      },
      {
        label: "Engineering",
        href: "/industries/engineering",
        icon: Wrench,
      },
      { label: "Logistics", href: "/industries/logistics", icon: Truck },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Knowledge Center", href: "/client-portal/knowledge-center" },
      { label: "Support", href: "/client-portal/tickets" },
      { label: "Academy", href: "/academy" },
      { label: "FAQ", href: "/client-portal/faq" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nexus-bg/80 backdrop-blur-xl border-b border-nexus-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nexus-accent to-nexus-accent2 flex items-center justify-center">
                <Zap className="w-5 h-5 text-nexus-bg" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-nexus-accent to-nexus-accent2 opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-nexus-text">NEXUS</span>
              <span className="text-gradient"> AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-nexus-secondary hover:text-nexus-text transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-nexus-card/95 backdrop-blur-xl border border-nexus-border/50 rounded-2xl p-2 min-w-[260px] shadow-2xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-nexus-secondary hover:text-nexus-text hover:bg-white/5 transition-all group"
                          >
                            {"icon" in child && child.icon && (
                              <div className="w-9 h-9 rounded-lg bg-nexus-accent/10 flex items-center justify-center group-hover:bg-nexus-accent/20 transition-colors">
                                <child.icon className="w-4 h-4 text-nexus-accent" />
                              </div>
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/client-portal"
              className="px-4 py-2 text-sm text-nexus-secondary hover:text-nexus-text transition-colors"
            >
              Control Plane
            </Link>
            <Link
              href="/client-portal"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-nexus-accent to-nexus-accent2 text-nexus-bg rounded-xl hover:opacity-90 transition-opacity glow-accent"
            >
              Open Platform
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-nexus-bg/95 backdrop-blur-xl border-t border-nexus-border/50"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-nexus-secondary hover:text-nexus-text rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-2 text-sm text-nexus-secondary/70 hover:text-nexus-text rounded-lg hover:bg-white/5"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 border-t border-nexus-border/50 space-y-2">
                <Link
                  href="/client-portal"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-nexus-secondary hover:text-nexus-text rounded-lg hover:bg-white/5"
                >
                  Control Plane
                </Link>
                <Link
                  href="/client-portal"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-nexus-accent to-nexus-accent2 text-nexus-bg rounded-xl text-center font-medium"
                >
                  Open Platform
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
