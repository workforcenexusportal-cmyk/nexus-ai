import { notFound } from "next/navigation";
import PlatformPage from "@/components/shared/PlatformPage";
import { pages } from "@/app/route-pages";
const serviceSlugs = ["ai-automation", "ai-agents", "business-process-automation", "predictive-analytics", "document-intelligence", "custom-software"];
export function generateStaticParams() { return serviceSlugs.map(service => ({ service })); }
export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) { const { service } = await params; const page = pages[service]; if (!page) notFound(); return <PlatformPage {...page} />; }
