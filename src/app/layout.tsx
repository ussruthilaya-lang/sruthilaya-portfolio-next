import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import NeuralNetwork from "@/components/visuals/NeuralNetwork";
import Providers from "@/app/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR_PROJECT_NAME.vercel.app"),
  title: {
    default: "Sruthilaya U.S — AI Systems & Product Engineering",
    template: "%s | Sruthilaya U.S",
  },
  description:
    "Portfolio of Sruthilaya U.S, building AI systems that turn unstructured data into actionable insights. Focused on ML systems, architecture, and real-world impact.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "MLOps",
    "System Design",
    "LLMs",
    "Data Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Sruthilaya U.S" }],
  creator: "Sruthilaya U.S",
  openGraph: {
    title: "Sruthilaya U.S — AI Systems & Product Engineering",
    description:
      "AI systems, ML pipelines, and architecture-focused projects with real-world impact.",
    url: "https://YOUR_PROJECT_NAME.vercel.app",
    siteName: "Sruthilaya U.S Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sruthilaya U.S — AI Systems & Product Engineering",
    description:
      "AI systems, ML pipelines, and architecture-focused projects with real-world impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD for search engines + LLMs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sruthilaya U.S",
              url: "https://YOUR_PROJECT_NAME.vercel.app",
              jobTitle: "AI Systems Engineer",
              sameAs: [
                "https://github.com/ussruthilaya-lang",
                "https://www.linkedin.com/in/YOUR_LINKEDIN",
              ],
              knowsAbout: [
                "Machine Learning",
                "MLOps",
                "System Design",
                "Natural Language Processing",
                "LLMs",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-screen bg-black text-white relative overflow-x-hidden">
        <Navbar />
        <NeuralNetwork />

        {/* Client-only logic lives here */}
        <Providers>
          <main className="relative z-10">{children}</main>
        </Providers>

        <footer className="relative z-10 text-center py-6 border-t border-white/5">
          <p className="text-white/30 text-xs">
            Built with intent. Optimized for impact.
          </p>
        </footer>

        {/* Vercel Speed Insights */}
        <SpeedInsights />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
