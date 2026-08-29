"use client";

import { motion } from "framer-motion";
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
  Factory,
  Wrench,
  Truck,
  Shield,
  Clock,
  TrendingUp,
  Globe,
  Sparkles,
  ChevronRight,
  Layers,
  Lock,
  Workflow,
} from "lucide-react";

/* ────────────── Hero ────────────── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexus-accent2/10 rounded-full blur-[128px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 right-[20%] w-3 h-3 bg-nexus-accent rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-32 left-[15%] w-2 h-2 bg-nexus-accent2 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-48 left-[30%] w-2 h-2 bg-purple-400 rounded-full opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise AI Automation Platform
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              The operating system for{" "}
              <span className="text-gradient">industrial intelligence.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-nexus-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nexus AI turns fragmented operations into an intelligent system of record — connecting your people, data, and workflows with secure AI agents that deliver measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/book-demo" size="lg" showArrow>
              Book a strategy session
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg" showArrow>
              Explore the platform
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-nexus-secondary"
          >
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-nexus-accent" />
              Enterprise-grade security
            </span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-nexus-accent" />
              Human-controlled AI
            </span>
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-nexus-accent" />
              Built for Europe
            </span>
          </motion.div>
        </div>

        {/* Floating dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-nexus-accent/20 to-nexus-accent2/20 rounded-3xl blur-xl" />
          <div className="relative bg-nexus-card/80 backdrop-blur-xl border border-nexus-border/50 rounded-2xl overflow-hidden p-1">
            <div className="bg-nexus-bg rounded-xl p-6">
              {/* Dashboard mockup */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-nexus-secondary font-mono">
                  nexus-ai / command-center
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-nexus-card rounded-xl p-4 border border-nexus-border/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-nexus-secondary">
                      Operational intelligence
                    </span>
                    <span className="text-xs text-nexus-accent2">+24.5% this month</span>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[40, 55, 45, 70, 60, 85, 75, 90, 82, 95, 88, 92].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-nexus-accent/30 to-nexus-accent/80"
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Active agents", value: "12", color: "text-nexus-accent" },
                    { label: "Tasks automated", value: "2.4K", color: "text-nexus-accent2" },
                    { label: "Time returned", value: "340h", color: "text-purple-400" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-nexus-card rounded-xl p-3 border border-nexus-border/30"
                    >
                      <span className="text-xs text-nexus-secondary block">{stat.label}</span>
                      <span className={`text-lg font-bold ${stat.color}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────── Trusted By / Logos ────────────── */
function TrustedBy() {
  const logos = [
    "SIEMENS", "BOSCH", "BMW GROUP", "SAP", "ABB", "SCHNEIDER"
  ];

  return (
    <section className="py-16 border-y border-nexus-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm text-nexus-secondary/60 mb-8 uppercase tracking-widest">
            The intelligence layer behind modern operations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xl md:text-2xl font-bold text-nexus-secondary tracking-wider"
              >
                {logo}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────────────── Services Grid ────────────── */
function Services() {
  const services = [
    {
      icon: Zap,
      title: "AI Automation",
      description:
        "End-to-end intelligent automation that transforms manual workflows into self-optimizing AI-driven processes.",
      href: "/services/ai-automation",
      color: "accent" as const,
    },
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Autonomous digital workers that handle complex tasks, make decisions, and collaborate across your systems.",
      href: "/services/ai-agents",
      color: "accent2" as const,
    },
    {
      icon: Brain,
      title: "Business Process Automation",
      description:
        "Map, optimize, and automate your entire business processes with intelligent orchestration.",
      href: "/services/business-process-automation",
      color: "purple" as const,
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description:
        "Forecast demand, predict failures, and optimize operations with AI-powered predictive models.",
      href: "/services/predictive-analytics",
      color: "accent" as const,
    },
    {
      icon: FileSearch,
      title: "Document Intelligence",
      description:
        "Extract, classify, and process documents automatically with 99.5% accuracy using AI.",
      href: "/services/document-intelligence",
      color: "pink" as const,
    },
    {
      icon: Code2,
      title: "Custom Software",
      description:
        "Purpose-built AI applications and integrations tailored to your unique operational requirements.",
      href: "/services/custom-software",
      color: "accent2" as const,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="accent" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One platform for{" "}
            <span className="text-gradient">every critical workflow</span>
          </h2>
          <p className="text-nexus-secondary text-lg max-w-2xl mx-auto">
            Start with one high-value workflow. Scale into an intelligent operating layer across the business.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <GlowCard glowColor={service.color} className="h-full">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      service.color === "accent"
                        ? "bg-nexus-accent/10"
                        : service.color === "accent2"
                        ? "bg-nexus-accent2/10"
                        : service.color === "purple"
                        ? "bg-purple-500/10"
                        : "bg-pink-500/10"
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${
                        service.color === "accent"
                          ? "text-nexus-accent"
                          : service.color === "accent2"
                          ? "text-nexus-accent2"
                          : service.color === "purple"
                          ? "text-purple-400"
                          : "text-pink-400"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-nexus-secondary text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <Button
                    href={service.href}
                    variant="ghost"
                    showArrow
                    className="self-start"
                  >
                    Learn More
                  </Button>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── Stats ────────────── */
function Stats() {
  const stats = [
    { value: "10x", label: "Faster Processing", icon: Clock },
    { value: "99.5%", label: "Accuracy Rate", icon: TrendingUp },
    { value: "60%", label: "Cost Reduction", icon: BarChart3 },
    { value: "500+", label: "AI Agents Deployed", icon: Bot },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-nexus-bg via-nexus-card/20 to-nexus-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-nexus-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-nexus-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-nexus-secondary text-sm">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── AI Products Suite ────────────── */
function Products() {
  const products = [
    {
      name: "Nexus Knowledge",
      tagline: "AI Knowledge Assistant",
      description:
        "Instant answers from your company's entire knowledge base. RAG-powered, context-aware, and always up-to-date.",
      icon: Brain,
      features: [
        "Natural language Q&A",
        "Source citations",
        "Multi-format support",
      ],
      color: "from-nexus-accent to-blue-400",
    },
    {
      name: "Nexus Docs",
      tagline: "Document Intelligence",
      description:
        "Extract, classify, and process documents at scale. Invoices, contracts, technical drawings — handled automatically.",
      icon: FileSearch,
      features: [
        "99.5% accuracy",
        "Auto-classification",
        "API integration",
      ],
      color: "from-nexus-accent2 to-emerald-400",
    },
    {
      name: "Nexus Maintain",
      tagline: "AI Maintenance Assistant",
      description:
        "Predict equipment failures before they happen. Reduce downtime by 45% with predictive maintenance.",
      icon: Wrench,
      features: [
        "Predictive alerts",
        "Maintenance scheduling",
        "IoT integration",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Nexus Flow",
      tagline: "Workflow Automation Engine",
      description:
        "Visual workflow builder with AI-powered optimization. Automate any process across your organization.",
      icon: Workflow,
      features: [
        "Drag & drop builder",
        "500+ integrations",
        "AI optimization",
      ],
      color: "from-pink-400 to-orange-400",
    },
    {
      name: "Nexus Insights",
      tagline: "AI Reporting Platform",
      description:
        "Real-time dashboards and AI-generated reports. Turn raw data into actionable intelligence instantly.",
      icon: BarChart3,
      features: [
        "Auto-generated reports",
        "Real-time dashboards",
        "Natural language queries",
      ],
      color: "from-amber-400 to-orange-400",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="accent2" className="mb-4">
            AI Product Suite
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your operations, upgraded by{" "}
            <span className="text-gradient">intelligent systems.</span>
          </h2>
          <p className="text-nexus-secondary text-lg max-w-2xl mx-auto">
            Purpose-built products for the moments where industrial teams lose time, context, and margin.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {products.map((product, i) => (
            <AnimatedSection
              key={product.name}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-nexus-card/40 backdrop-blur-xl border border-nexus-border/50 rounded-2xl p-6 md:p-8 hover:border-nexus-accent/30 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="text-sm text-nexus-secondary">
                        — {product.tagline}
                      </span>
                    </div>
                    <p className="text-nexus-secondary text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 bg-nexus-bg/50 border border-nexus-border/30 rounded-full text-xs text-nexus-secondary"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    href="/pricing"
                    variant="outline"
                    size="sm"
                    showArrow
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View Plans
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── Industries ────────────── */
function Industries() {
  const industries = [
    {
      icon: Factory,
      name: "Manufacturing",
      description:
        "Smart factory automation, quality control, predictive maintenance, and production optimization.",
      stats: "45% downtime reduction",
      color: "accent" as const,
    },
    {
      icon: Wrench,
      name: "Engineering",
      description:
        "CAD automation, simulation optimization, design review assistance, and technical documentation.",
      stats: "3x faster design cycles",
      color: "accent2" as const,
    },
    {
      icon: Truck,
      name: "Logistics",
      description:
        "Route optimization, warehouse automation, supply chain forecasting, and fleet management.",
      stats: "30% logistics cost savings",
      color: "purple" as const,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="purple" className="mb-4">
            Industry Focus
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the businesses that{" "}
            <span className="text-gradient-purple">move the world</span>
          </h2>
          <p className="text-nexus-secondary text-lg max-w-2xl mx-auto">
            Deep workflow expertise across the environments where precision, uptime, and speed create competitive advantage.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.name} delay={i * 0.15}>
              <GlowCard glowColor={industry.color} className="h-full">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    industry.color === "accent"
                      ? "bg-nexus-accent/10"
                      : industry.color === "accent2"
                      ? "bg-nexus-accent2/10"
                      : "bg-purple-500/10"
                  }`}
                >
                  <industry.icon
                    className={`w-8 h-8 ${
                      industry.color === "accent"
                        ? "text-nexus-accent"
                        : industry.color === "accent2"
                        ? "text-nexus-accent2"
                        : "text-purple-400"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-nexus-secondary text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${
                    industry.color === "accent"
                      ? "bg-nexus-accent/10 text-nexus-accent"
                      : industry.color === "accent2"
                      ? "bg-nexus-accent2/10 text-nexus-accent2"
                      : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  {industry.stats}
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button href="/industries" variant="secondary" showArrow>
            Explore All Industries
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────────────── How It Works ────────────── */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We analyze your operations, identify automation opportunities, and map your AI transformation roadmap.",
      icon: Brain,
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our architects design custom AI solutions tailored to your workflows, systems, and compliance requirements.",
      icon: Layers,
    },
    {
      step: "03",
      title: "Deploy",
      description:
        "Rapid deployment with continuous monitoring, testing, and optimization. Go live in weeks, not months.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Scale",
      description:
        "Expand AI capabilities across your organization. Our solutions grow with your ambitions.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-nexus-bg via-nexus-card/20 to-nexus-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="default" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From fragmented processes to{" "}
            <span className="text-gradient">compounding advantage</span>
          </h2>
          <p className="text-nexus-secondary text-lg max-w-2xl mx-auto">
            A focused path from first workflow to an AI operating system your team can trust.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.15}>
              <div className="relative text-center">
                <div className="text-6xl font-bold text-nexus-border/50 mb-4">
                  {s.step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-nexus-accent/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-nexus-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-nexus-secondary text-sm leading-relaxed">
                  {s.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                    <ChevronRight className="w-6 h-6 text-nexus-border" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── Testimonials ────────────── */
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nexus AI reduced our quality inspection time by 73% and improved defect detection accuracy to 99.2%. The ROI was visible within the first quarter.",
      name: "Dr. Klaus Weber",
      role: "VP Operations, Siemens AG",
      company: "Siemens",
    },
    {
      quote:
        "Their AI agents transformed our supply chain management. We now predict disruptions 2 weeks in advance and automatically adjust procurement.",
      name: "Maria Schneider",
      role: "Head of Logistics, BMW Group",
      company: "BMW",
    },
    {
      quote:
        "The document intelligence platform processes 10,000+ technical drawings per day with 99.5% accuracy. It freed our engineers to focus on innovation.",
      name: "Thomas Müller",
      role: "CTO, Bosch Engineering",
      company: "Bosch",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="accent" className="mb-4">
            Client Success
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for outcomes. Designed for trust.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <GlowCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className="w-5 h-5 text-nexus-accent fill-nexus-accent"
                    >
                      ★
                    </div>
                  ))}
                </div>
                <blockquote className="text-sm text-nexus-secondary leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-nexus-border/30">
                  <div className="w-10 h-10 rounded-full bg-nexus-accent/20 flex items-center justify-center text-nexus-accent font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-nexus-secondary">
                      {t.role}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── Pricing Preview ────────────── */
function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "€2,999",
      period: "/month",
      description: "Perfect for SMEs starting their AI journey",
      features: [
        "2 AI Agents",
        "1,000 tasks/month",
        "Basic analytics",
        "Email support",
        "Standard integrations",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "€7,999",
      period: "/month",
      description: "For mid-sized companies scaling AI operations",
      features: [
        "10 AI Agents",
        "10,000 tasks/month",
        "Advanced analytics",
        "Priority support",
        "All integrations",
        "Custom workflows",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited AI Agents",
        "Unlimited tasks",
        "Enterprise analytics",
        "Dedicated support",
        "Custom integrations",
        "On-premise option",
        "SLA guarantee",
        "Dedicated CSM",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-nexus-bg via-nexus-card/20 to-nexus-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="accent2" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start with impact. Scale with confidence.
          </h2>
          <p className="text-nexus-secondary text-lg max-w-2xl mx-auto">
            Begin with a measurable transformation sprint, then expand into the platform as value compounds.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={`relative bg-nexus-card/60 backdrop-blur-xl border rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-nexus-accent/50 glow-accent"
                    : "border-nexus-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="accent">Most Popular</Badge>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-nexus-secondary text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-nexus-secondary text-sm mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-nexus-secondary"
                    >
                      <div className="w-4 h-4 rounded-full bg-nexus-accent2/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-nexus-accent2" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.name === "Enterprise" ? "/contact" : "/book-demo"}
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <Button href="/pricing" variant="ghost" showArrow>
            Compare All Plans
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────────────── Final CTA ────────────── */
function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-accent2/10 rounded-full blur-[128px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Make your next advantage{" "}
            <span className="text-gradient">operational.</span>
          </h2>
          <p className="text-nexus-secondary text-lg mb-10 max-w-2xl mx-auto">
            See where intelligent workflows can return time, reduce risk, and create a faster path to scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book-demo" size="lg" showArrow>
              Book a strategy session
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to an expert
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────────────── Page ────────────── */
function Rocket({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="dark">
      <Hero />
      <TrustedBy />
      <Services />
      <Stats />
      <Products />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </div>
  );
}
