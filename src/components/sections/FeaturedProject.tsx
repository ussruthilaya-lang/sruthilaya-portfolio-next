"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Github } from "lucide-react";

export default function FeaturedProject() {
    const ref = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const [isExpanded, setIsExpanded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section
            id="work"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-5xl w-full">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <p className="text-xs text-emerald-500 tracking-wider uppercase mb-2">
                        Featured Work
                    </p>
                    <div className="w-12 h-0.5 bg-emerald-500/50" />
                </motion.div>

                {/* Project Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
                >
                    {/* Video */}
                    <div
                        className="relative h-80 bg-gradient-to-br from-emerald-950/50 to-black overflow-hidden cursor-pointer"
                        onClick={() => {
                            if (!videoRef.current) return;
                            if (videoRef.current.paused) {
                                videoRef.current.play();
                                setIsPaused(false);
                            } else {
                                videoRef.current.pause();
                                setIsPaused(true);
                            }
                        }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

                        <video
                            ref={videoRef}
                            src="/videos/ProjectDemo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-hidden="true"
                            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                        />

                        {/* Replay / Resume controls */}
                        {isPaused && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="flex gap-4">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            videoRef.current?.play();
                                            setIsPaused(false);
                                        }}
                                        className="pointer-events-auto bg-black/60 backdrop-blur-md rounded-full p-3 text-white/80 hover:text-white text-3xl"
                                        aria-label="Resume video"
                                    >
                                        ▶
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!videoRef.current) return;
                                            videoRef.current.currentTime = 0;
                                            videoRef.current.play();
                                            setIsPaused(false);
                                        }}
                                        className="pointer-events-auto bg-black/60 backdrop-blur-md rounded-full p-3 text-white/80 hover:text-white text-2xl"
                                        aria-label="Replay video"
                                    >
                                        ↺
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Reputation & Sentiment Intelligence Platform
                        </h3>

                        <p className="text-xl text-emerald-500 mb-6 font-medium">
                            Turned unstructured public feedback into actionable product signals
                        </p>

                        <div className="mb-8">
                            <p className="text-sm text-white/40 uppercase tracking-wider mb-2">
                                Why this mattered
                            </p>
                            <p className="text-white/70 leading-relaxed max-w-2xl">
                                Teams often react to loud feedback instead of meaningful signals.
                                This system ingests noisy reputation data and surfaces structured
                                insights teams can actually act on.
                            </p>
                        </div>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Python", "NLP", "Embeddings", "Clustering", "PostgreSQL", "Streamlit"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/50"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>

                        {/* Architecture Toggle */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors mb-4"
                        >
                            <span className="font-medium">
                                {isExpanded ? "Hide" : "View"} Architecture & Decisions
                            </span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Expandable Content */}
                        <motion.div
                            initial={false}
                            animate={{
                                height: isExpanded ? "auto" : 0,
                                opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-2">
                                        Architecture
                                    </h4>
                                    <p className="text-sm text-white/60">
                                        Decoupled pipeline: ingestion → enrichment → embeddings →
                                        clustering → insight surfacing. Each stage evolves independently.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-2">
                                        Key Design Choices
                                    </h4>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li>→ Separated ingestion from ML for reproducibility</li>
                                        <li>→ Used embeddings over fixed taxonomies</li>
                                        <li>→ Prioritized traceable, explainable insights</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Links */}
                        <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                            <a
                                href="https://github.com/ussruthilaya-lang/reputation-ml-intel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white/50 hover:text-emerald-500"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
