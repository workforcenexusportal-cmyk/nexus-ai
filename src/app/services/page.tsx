"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import GlowCard from "@/components/shared/GlowCard";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  Zap,
  Bot,
  Brain,
  BarChart3,
  FileSearch,
  Code2,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "AI Automation",
    href: "/services/ai-automation",
    description: "End-to-end intelligent automation for industrial workflows.",
    features: [
      "Process mining & optimization",
      "Intelligent document processing",
      "Automated quality control",
      "Smart scheduling",
    ],
    color: "accent",
  },
  {
    icon: Bot,
    title: "AI Agents",
    href: "/services/ai-agents",
    description: "Autonomous digital workers that handle complex tasks 24/7.",
    features: [
      "Multi-agent orchestration",
      "Tool-use capabilities",
      "Memory & context management",
      "Human-in-the-loop workflows",
    ],
    color: "accent2",
  },
  {
    icon: Brain,
    title: "Business Process Automation",
    href: "/services/business-process-automation",
    description: "Map, optimize, and automate your entire business operations.",
    features: [
      "Process discovery & mapping",
      "Workflow automation",
      "Cross-system integration",
      "Continuous optimization",
    ],
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    href: "/services/predictive-analytics",
    description: "AI-powered forecasting and decision intelligence.",
    features: [
      "Demand forecasting",
      "Predictive maintenance",
      "Risk modeling",
      "Real-time dashboards",
    ],
    color: "accent",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    href: "/services/document-intelligence",
    description: "Extract, classify, and process documents at scale.",
    features: [
      "99.5% extraction accuracy",
      "Multi-format support",
      "Auto-classification",
      "Compliance automation",
    ],
    color: "pink",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    href: "/services/custom-software",
    description: "Purpose-built AI applications for unique requirements.",
    features: [
      "Full-stack development",
      "AI/ML integration",
      "Legacy system modernization",
      "API development",
    ],
    color: "accent2",
  },
];

export default function ServicesPage() {
  return (
    <div className="dark">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-nexus-accent/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise AI{" "}
              <span className="text-gradient">Capabilities</span>
            </h1>
            <p className="text-xl text-nexus-secondary leading-relaxed">
              From AI automation to custom development, we deliver the full
              spectrum of AI capabilities that industrial companies need to
              transform their operations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="bg-nexus-card/40 backdrop-blur-xl border border-nexus-border/50 rounded-2xl p-8 hover:border-nexus-accent/30 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          s.color === "accent"
                            ? "bg-nexus-accent/10"
                            : s.color === "accent2"
                            ? "bg-nexus-accent2/10"
                            : s.color === "purple"
                            ? "bg-purple-500/10"
                            : "bg-pink-500/10"
                        }`}
                      >
                        <s.icon
                          className={`w-8 h-8 ${
                            s.color === "accent"
                              ? "text-nexus-accent"
                              : s.color === "accent2"
                              ? "text-nexus-accent2"
                              : s.color === "purple"
                              ? "text-purple-400"
                              : "text-pink-400"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                      <p className="text-nexus-secondary mb-6">
                        {s.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {s.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-sm text-nexus-secondary"
                          >
                            <Check className="w-4 h-4 text-nexus-accent2 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Button
                        href={s.href}
                        variant="outline"
                        showArrow
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-nexus-bg via-nexus-card/20 to-nexus-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-nexus-secondary text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation. Our AI experts will analyze your
              operations and recommend the right solutions.
            </p>
            <Button href="/book-demo" size="lg" showArrow>
              Book a Free Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
