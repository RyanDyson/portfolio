import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { type Author } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan's Portfolio",
  icons: "./favicon.ico",
  description:
    "Ryan Dyson's professional portfolio showcasing projects and skills.",
  keywords:
    "Ryan Dyson Darmawan, Verflight, cityu, cityuhk, city university of hong kong, cs, computer science, student, portfolio, full-stack, hongkong, hk, indo, Indonesia, banten, tangerang, jakarta, jkt, gading serpong, web developer, projects, skills, react, dev, nextjs, tailwind, css, next, vercel, supabase, prisma, trpc, mobile, app, kotlin, python, java",
  authors: [{ name: "Ryan Dyson", url: "https://www.verflight.works" }],
  openGraph: {
    title: "Ryan's Portfolio",
    description:
      "Ryan Dyson's professional portfolio showcasing projects and skills.",
    url: "https://www.verflight.works",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-blue-950 ${inter.className}`}>
        <SpeedInsights />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
