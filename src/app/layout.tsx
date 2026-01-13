"use client";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/layout/Navbar";
import NeuralNetwork from "@/components/visuals/NeuralNetwork";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // 🔊 Single source of truth for audio
  const tracks = [
    { src: "/audio/focus-1.mp3" },
    { src: "/audio/focus-2.mp3" },
  ];

  const audio = useAudioPlayer(tracks);

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Global background + navigation */}
        <Navbar />
        <NeuralNetwork />

        {/* Main page content */}
        <main className="relative z-10">{children}</main>

        {/* Single audio engine */}
        <audio
          ref={audio.audioRef}
          src={tracks[audio.currentTrack].src}
          onEnded={audio.next}
        />

        {/* Footer */}
        <footer className="relative z-10 text-center py-6 border-t border-white/5">
          <p className="text-white/30 text-xs">
            Built with intent. Optimized for impact.
          </p>
        </footer>

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
