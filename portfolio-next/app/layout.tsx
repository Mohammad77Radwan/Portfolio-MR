import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components";
import { NebulaBackdrop } from "@/components";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReadingProgress } from "@/components/reading-progress";
import { CommandTerminal } from "@/components/command-terminal";
import { BackToTop } from "@/components/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radwan-portfolio.vercel.app"),
  title: "Mohammad Radwan - Développeur Web Full-Stack",
  description: "Portfolio avancé de Mohammad Radwan - BTS SIO SLAM. Découvrez mes projets, compétences et réalisations en développement web moderne.",
  keywords: [
    "développeur web",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
    "BTS SIO",
    "saint-étienne",
  ],
  openGraph: {
    title: "Mohammad Radwan - Développeur Web",
    description: "Portfolio avancé avec projets, compétences et réalisations",
    url: "https://radwan-portfolio.vercel.app",
    siteName: "Portfolio Mohammad Radwan",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Mohammad Radwan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Radwan - Portfolio",
    description: "Projets, compétences, expérience",
    images: ["/og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="relative min-h-full flex flex-col bg-slate-950 text-slate-50 transition-colors">
        <NebulaBackdrop />
        <CustomCursor />
        <ReadingProgress />
        <CommandTerminal />
        <Navbar />
        <BackToTop />
        <main className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
