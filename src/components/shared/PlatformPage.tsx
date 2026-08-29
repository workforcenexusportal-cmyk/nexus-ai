import Link from "next/link";
import { ArrowRight, Check, Sparkles, ShieldCheck, Zap, Bot, Factory, Wrench, Truck, FileText, BarChart3, Workflow, BookOpen, Users, LockKeyhole } from "lucide-react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import GlowCard from "@/components/shared/GlowCard";

export type PlatformPageProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  icon?: "automation" | "agents" | "factory" | "engineering" | "logistics" | "docs" | "analytics" | "workflow" | "book" | "team";
  metrics?: { value: string; label: string }[];
  sections?: { title: string; description: string; bullets: string[] }[];
  faqs?: { question: string; answer: string }[];
};

const icons = { automation: Zap, agents: Bot, factory: Factory, engineering: Wrench, logistics: Truck, docs: FileText, analytics: BarChart3, workflow: Workflow, book: BookOpen, team: Users };

export default function PlatformPage({ eyebrow, title, highlight, description, primaryCta = "Start building with Nexus", primaryHref = "/book-demo", secondaryCta = "Explore platform", secondaryHref = "/services", icon = "automation", metrics = [], sections = [], faqs = [] }: PlatformPageProps) {
  const Icon = icons[icon];
  return <div className="dark min-h-screen">
    <section className="relative overflow-hidden border-b border-nexus-border/40">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-nexus-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6"><Sparkles className="h-3.5 w-3.5" />{eyebrow}</Badge>
            <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">{title} {highlight && <span className="text-gradient">{highlight}</span>}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-nexus-secondary md:text-xl">{description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={primaryHref} size="lg" showArrow>{primaryCta}</Button><Button href={secondaryHref} variant="secondary" size="lg">{secondaryCta}</Button></div>
            <div className="mt-8 flex flex-wrap gap-5 text-xs text-nexus-secondary"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-nexus-accent2" />Private by design</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-nexus-accent" />Human-in-the-loop</span></div>
          </div>
          <div className="relative"><div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-nexus-accent/20 to-nexus-accent2/10 blur-2xl" /><div className="relative rounded-[1.5rem] border border-white/10 bg-nexus-card/80 p-4 shadow-2xl backdrop-blur-xl"><div className="rounded-xl border border-nexus-border/60 bg-nexus-bg p-5"><div className="mb-6 flex items-center justify-between"><span className="font-mono text-xs text-nexus-secondary">NEXUS / CONTROL PLANE</span><span className="flex items-center gap-2 text-xs text-nexus-accent2"><span className="h-2 w-2 animate-pulse rounded-full bg-nexus-accent2" />Live</span></div><div className="mb-5 flex h-36 items-end gap-2">{[32,48,42,68,55,76,66,88,72,94,82,98].map((height, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-nexus-accent/20 to-nexus-accent" style={{ height: `${height}%`, opacity: .45 + i / 25 }} />)}</div><div className="grid grid-cols-2 gap-3"><div className="rounded-xl border border-nexus-border/60 bg-nexus-card p-4"><div className="text-xs text-nexus-secondary">Workflows healthy</div><div className="mt-2 text-2xl font-semibold text-nexus-accent2">98.4%</div></div><div className="rounded-xl border border-nexus-border/60 bg-nexus-card p-4"><div className="text-xs text-nexus-secondary">Hours returned</div><div className="mt-2 text-2xl font-semibold text-nexus-accent">340h</div></div></div></div></div></div>
        </div>
      </div>
    </section>
    {metrics.length > 0 && <section className="border-b border-nexus-border/40"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-nexus-border/40 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{metrics.map(metric => <div key={metric.label} className="px-5 py-8 first:pl-0"><div className="text-3xl font-bold text-gradient">{metric.value}</div><div className="mt-1 text-xs uppercase tracking-wider text-nexus-secondary">{metric.label}</div></div>)}</div></section>}
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><Badge variant="accent2" className="mb-4">The Nexus advantage</Badge><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Designed for <span className="text-gradient">compounding value.</span></h2></div><div className="grid gap-6 md:grid-cols-2">{sections.map(section => <GlowCard key={section.title} className="h-full"><h3 className="text-xl font-semibold">{section.title}</h3><p className="mt-3 text-sm leading-relaxed text-nexus-secondary">{section.description}</p><ul className="mt-6 space-y-3">{section.bullets.map(bullet => <li key={bullet} className="flex gap-3 text-sm text-nexus-secondary"><Check className="mt-0.5 h-4 w-4 shrink-0 text-nexus-accent2" />{bullet}</li>)}</ul></GlowCard>)}</div></section>
    {faqs.length > 0 && <section className="border-y border-nexus-border/40 bg-nexus-card/20"><div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8"><Badge variant="default" className="mb-4">Frequently asked</Badge><h2 className="text-4xl font-bold">Answers for the <span className="text-gradient">next decision.</span></h2><div className="mt-10 divide-y divide-nexus-border/50">{faqs.map(faq => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-medium group-open:text-nexus-accent">{faq.question}<span className="float-right text-nexus-secondary">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-relaxed text-nexus-secondary">{faq.answer}</p></details>)}</div></div></section>}
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6"><h2 className="text-4xl font-bold md:text-5xl">Turn operational drag into <span className="text-gradient">your next release.</span></h2><p className="mx-auto mt-5 max-w-2xl text-lg text-nexus-secondary">Start with one workflow. Build the intelligence layer you control end to end.</p><div className="mt-8"><Button href="/book-demo" size="lg" showArrow>Start building with Nexus</Button></div></section>
  </div>;
}
