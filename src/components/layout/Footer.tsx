"use client";

import Link from "next/link";
import {
  Zap,
  Share2,
  MessageCircle,
  Code2,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "AI Agents", href: "/services/ai-agents" },
      {
        label: "Business Process Automation",
        href: "/services/business-process-automation",
      },
      {
        label: "Predictive Analytics",
        href: "/services/predictive-analytics",
      },
      {
        label: "Document Intelligence",
        href: "/services/document-intelligence",
      },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Engineering", href: "/industries/engineering" },
      { label: "Logistics", href: "/industries/logistics" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "AI Knowledge Assistant", href: "/pricing" },
      { label: "Document Intelligence", href: "/pricing" },
      { label: "AI Maintenance", href: "/pricing" },
      { label: "Workflow Engine", href: "/pricing" },
      { label: "AI Reporting", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Book Demo", href: "/book-demo" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Investors", href: "/investors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Center", href: "/client-portal/knowledge-center" },
      { label: "FAQ", href: "/client-portal/faq" },
      { label: "Documentation", href: "/client-portal/knowledge-center" },
      { label: "API Reference", href: "/client-portal/knowledge-center" },
      { label: "Academy", href: "/academy" },
      { label: "Status", href: "/status" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-nexus-bg border-t border-nexus-border/50">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nexus-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-nexus-border/50">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Stay ahead of the{" "}
              <span className="text-gradient">AI revolution</span>
            </h3>
            <p className="text-nexus-secondary">
              Get weekly insights on AI automation, industry trends, and
              exclusive early access to new features.
            </p>
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-80 px-5 py-3 bg-nexus-card border border-nexus-border rounded-xl text-nexus-text placeholder:text-nexus-secondary/50 focus:outline-none focus:border-nexus-accent/50 focus:ring-1 focus:ring-nexus-accent/30 transition-all"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-nexus-accent to-nexus-accent2 text-nexus-bg rounded-xl font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-nexus-text mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, index) => (
                  <li key={`${section.title}-${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-nexus-secondary hover:text-nexus-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-nexus-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nexus-accent to-nexus-accent2 flex items-center justify-center">
              <Zap className="w-4 h-4 text-nexus-bg" />
            </div>
            <span className="font-bold">
              NEXUS<span className="text-gradient"> AI</span>
            </span>
          </div>

          <p className="text-sm text-nexus-secondary text-center">
            © {new Date().getFullYear()} Nexus AI. All rights reserved. Built
            for the future of industrial automation.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-nexus-secondary hover:text-nexus-accent transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-nexus-secondary hover:text-nexus-accent transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-nexus-secondary hover:text-nexus-accent transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-nexus-secondary hover:text-nexus-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Link
            href="/legal/privacy"
            className="text-xs text-nexus-secondary/60 hover:text-nexus-secondary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/legal/terms"
            className="text-xs text-nexus-secondary/60 hover:text-nexus-secondary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/legal/cookies"
            className="text-xs text-nexus-secondary/60 hover:text-nexus-secondary transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
