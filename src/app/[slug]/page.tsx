import { notFound } from "next/navigation";
import PlatformPage from "@/components/shared/PlatformPage";
import { pages } from "@/app/route-pages";

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <PlatformPage {...page} />;
}
