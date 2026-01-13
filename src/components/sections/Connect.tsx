"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Linkedin,
    Github,
    Mail,
    ArrowUpRight,
} from "lucide-react";

export default function Connect() {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const contacts = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/sruthilaya-sundaram-306",
            description: "Professional network",
        },
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/ussruthilaya-lang",
            description: "Code repositories",
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:ussruthilaya@gmail.com",
            description: "Direct contact",
        },
    ];

    return (
        <section
            id="connect"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-4xl w-full">
                {/* Section Header - minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="text-xs text-emerald-500 tracking-wider uppercase mb-4">
                        Connect
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let's build something
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
                        Open to collaborations, conversations, and
                        opportunities where craft meets impact.
                    </p>
                </motion.div>

                {/* Contact Options - clean and simple */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-4 mb-16"
                >
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                delay: 0.3 + index * 0.1,
                            }}
                            className="group flex flex-col items-center justify-center p-6 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 rounded-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-emerald-500/20 border border-white/10 group-hover:border-emerald-500/50 rounded-lg mb-4 transition-all duration-300">
                                <contact.icon className="w-6 h-6 text-white/40 group-hover:text-emerald-500 transition-colors" />
                            </div>
                            <h3 className="text-base font-semibold text-white group-hover:text-emerald-500 transition-colors mb-1">
                                {contact.name}
                            </h3>
                            <p className="text-xs text-white/40">
                                {contact.description}
                            </p>
                            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mt-2" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Availability & Mindset */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-6"
                >
                    {/* What I'm Looking For */}
                    <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                        <p className="text-sm text-white/40 uppercase tracking-wider mb-3">
                            Open to
                        </p>
                        <ul className="space-y-2 text-white/70">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">→</span>
                                <span>
                                    Full-time roles where ML meets real impact
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">→</span>
                                <span>
                                    High-agency teams building 0→1 products
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">→</span>
                                <span>
                                    Projects that compound: systems over scripts
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Closing Statement */}
                    <div className="text-center">
                        <p className="text-white/40 text-sm leading-relaxed">
                            I value deep work and meaningful impact. Looking to join teams that ship, iterate, and care about the craft.
                        </p>
                    </div>
                </motion.div>

                {/* Final Touch - very subtle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto" />
                </motion.div>
            </div>
        </section>
    );
}