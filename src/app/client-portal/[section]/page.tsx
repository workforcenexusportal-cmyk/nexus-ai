import { notFound } from "next/navigation";
import PlatformPage from "@/components/shared/PlatformPage";
const data = {
  "knowledge-center": { eyebrow: "Knowledge center", title: "Your company’s memory,", highlight: "made useful.", description: "Search trusted internal knowledge, understand the source, and turn answers into action.", icon: "book" as const },
  faq: { eyebrow: "Help center", title: "Answers without the", highlight: "runaround.", description: "Practical guidance for using Nexus, governing AI workflows, and expanding automation safely.", icon: "book" as const },
  tickets: { eyebrow: "Support operations", title: "Resolve issues with", highlight: "context.", description: "Track requests, owners, service levels, and resolution history in one place.", icon: "workflow" as const },
};
export function generateStaticParams() { return Object.keys(data).map(section => ({ section })); }
export default async function PortalSection({ params }: { params: Promise<{ section: string }> }) { const { section } = await params; const page = data[section as keyof typeof data]; if (!page) notFound(); return <PlatformPage {...page} sections={[{ title: "Ask in plain language", description: "Nexus retrieves the right context and shows where the answer came from.", bullets: ["Source citations", "Permission-aware search", "Saved answers"] }, { title: "Make knowledge operational", description: "Connect knowledge to workflows so the next action is clear.", bullets: ["Suggested actions", "Team sharing", "Workflow handoff"] }]} />; }
