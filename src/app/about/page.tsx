"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GlowCard from "@/components/shared/GlowCard";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Zap,
  Award,
  TrendingUp,
  MapPin,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to democratize AI automation for industrial companies, making enterprise-grade AI accessible to organizations of all sizes.",
  },
  {
    icon: Eye,
    title: "Visionary",
    description:
      "We don't just follow AI trends — we define them. Our research pushes the boundaries of what's possible in industrial automation.",
  },
  {
    icon: Heart,
    title: "Client Obsessed",
    description:
      "Every decision we make is filtered through one lens: does this create more value for our clients? Their success is our success.",
  },
  {
    icon: Zap,
    title: "Relentless Innovation",
    description:
      "We ship fast, iterate faster, and never stop improving. Stagnation is the enemy of progress.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Good enough never is. We hold ourselves to the highest standards in engineering, design, and client service.",
  },
  {
    icon: Globe,
    title: "European Values",
    description:
      "Built in Europe, for the world. We champion data sovereignty, privacy, and ethical AI practices.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Foundation",
    description: "Nexus AI founded with a vision to transform industrial AI automation.",
  },
  {
    year: "2025",
    title: "First 50 Clients",
    description: "Reached 50 enterprise clients across manufacturing and logistics.",
  },
  {
    year: "2026",
    title: "Product Launch",
    description: "Launched 5 SaaS products. €2M ARR milestone.",
  },
  {
    year: "2027",
    title: "European Expansion",
    description: "Offices in Berlin, Munich, Zurich, and Amsterdam.",
  },
  {
    year: "2028",
    title: "Global Scale",
    description: "1000+ clients worldwide. Series B funding round.",
  },
];

const team = [
  {
    name: "Alexandra Schmidt",
    role: "CEO & Co-Founder",
    bio: "Former VP at Siemens Digital. 15+ years in industrial automation.",
    initials: "AS",
  },
  {
    name: "Marcus Weber",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI engineer. PhD in Machine Learning from TU Munich.",
    initials: "MW",
  },
  {
    name: "Elena Fischer",
    role: "Chief Product Officer",
    bio: "Built enterprise SaaS products at SAP and ServiceNow.",
    initials: "EF",
  },
  {
    name: "Dr. Thomas Koch",
    role: "Head of AI Research",
    bio: "Published 40+ papers on industrial AI. Former Fraunhofer researcher.",
    initials: "TK",
  },
  {
    name: "Sarah Lindberg",
    role: "VP Engineering",
    bio: "Led engineering teams at Spotify and Zalando. Scaled systems to 100M+ users.",
    initials: "SL",
  },
  {
    name: "David Müller",
    role: "VP Sales & Partnerships",
    bio: "Former Enterprise Sales Director at Microsoft. Deep industry network.",
    initials: "DM",
  },
];

export default function AboutPage() {
  return (
    <div className="dark">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-accent/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              About Nexus AI
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="text-gradient">Industrial Intelligence</span>
            </h1>
            <p className="text-xl text-nexus-secondary leading-relaxed">
              We're a team of AI researchers, engineers, and industry veterans
              on a mission to make enterprise AI automation accessible, reliable,
              and transformative.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <GlowCard glowColor="accent" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-nexus-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-nexus-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-nexus-secondary leading-relaxed">
                  To empower industrial companies with AI-powered automation
                  that drives measurable business outcomes — reducing costs,
                  eliminating inefficiencies, and unlocking human potential.
                  We believe every organization deserves access to
                  enterprise-grade AI, regardless of size.
                </p>
              </GlowCard>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <GlowCard glowColor="accent2" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-nexus-accent2/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-nexus-accent2" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-nexus-secondary leading-relaxed">
                  A world where intelligent AI agents work alongside humans
                  in every factory, warehouse, and engineering firm — predicting
                  problems before they occur, optimizing every process, and
                  enabling people to focus on what they do best: innovate, create,
                  and lead.
                </p>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-nexus-bg via-nexus-card/20 to-nexus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="accent2" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <v.icon className="w-8 h-8 text-nexus-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-nexus-secondary text-sm leading-relaxed">
                    {v.description}
                  </p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="purple" className="mb-4">
              Leadership
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Meet the <span className="text-gradient-purple">Team</span>
            </h2>
            <p className="text-nexus-secondary text-lg max-w-2xl mx-auto">
              World-class talent from the world&apos;s leading technology and industrial
              companies, united by a shared mission.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1}>
                <GlowCard className="h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nexus-accent to-nexus-accent2 flex items-center justify-center mx-auto mb-4 text-nexus-bg font-bold text-lg">
                    {m.initials}
                  </div>
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-nexus-accent text-sm mb-2">{m.role}</p>
                  <p className="text-nexus-secondary text-sm">{m.bio}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-nexus-bg via-nexus-card/20 to-nexus-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              From Startup to <span className="text-gradient">Scale</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1} direction="left">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center">
                    <span className="text-nexus-accent font-bold text-lg">
                      {m.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
                    <p className="text-nexus-secondary text-sm">
                      {m.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Want to <span className="text-gradient">Join Us</span>?
            </h2>
            <p className="text-nexus-secondary text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional people who share our passion
              for AI and industrial innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/careers" size="lg" showArrow>
                View Open Positions
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
