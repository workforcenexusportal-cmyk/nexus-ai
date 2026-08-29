import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus AI | Enterprise AI Automation Platform",
  description:
    "Transform your manufacturing, engineering, and logistics operations with AI-powered automation. Nexus AI delivers intelligent agents, predictive analytics, and document intelligence at enterprise scale.",
  keywords: [
    "AI automation",
    "enterprise AI",
    "manufacturing AI",
    "AI agents",
    "business process automation",
    "predictive analytics",
    "document intelligence",
  ],
  openGraph: {
    title: "Nexus AI | The operating system for industrial intelligence",
    description: "Secure AI agents and intelligent workflows for manufacturing, engineering, and logistics.",
    type: "website",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://nexus-ai.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-nexus-bg text-nexus-text flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
