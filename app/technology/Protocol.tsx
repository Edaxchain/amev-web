"use client";

import { motion } from "framer-motion";
import {
    Github,
    FileText,
    ShieldCheck,
    Code,
    Globe,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Protocol() {
    return (
        <section
            id="protocol"
            className="bg-amber py-10 md:py-12 relative overflow-hidden px-6 md:px-[52px]"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern
                        id="grid-protocol"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                    </pattern>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#grid-protocol)"
                    />
                </svg>
            </div>

            <div className="max-w-[1440px] mx-auto w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-px w-8 bg-panel-dark" />
                        <span className="font-brand text-[10px] font-black text-panel-dark uppercase tracking-[0.4em]">
                            Open source Protocol
                        </span>
                        <div className="h-px w-8 bg-panel-dark" />
                    </div>

                    <h2 className="font-brand text-4xl md:text-6xl lg:text-7xl font-black text-panel-dark leading-[0.9] tracking-tighter mb-10">
                        Explore the <br />
                        <span className="italic font-editorial font-light underline decoration-amber-deep/30">
                            protocol.
                        </span>
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 bg-panel-dark/5 border border-panel-dark/10 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-xl shadow-amber-deep/5 transition-all hover:bg-panel-dark/10">
                            <Code size={16} className="text-panel-dark" />
                            <span className="font-brand text-[11px] font-black text-panel-dark uppercase tracking-wider">
                                Open source.
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-panel-dark/5 border border-panel-dark/10 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-xl shadow-amber-deep/5 transition-all hover:bg-panel-dark/10">
                            <ShieldCheck
                                size={16}
                                className="text-panel-dark"
                            />
                            <span className="font-brand text-[11px] font-black text-panel-dark uppercase tracking-wider">
                                Fully audited.
                            </span>
                        </div>
                    </div>

                    <p className="max-w-2xl font-brand text-lg md:text-xl text-panel-dark leading-relaxed font-medium mb-12">
                        The Solarc smart contracts, oracle bridge architecture,
                        and technical documentation are available for review. We
                        welcome technical due diligence from institutional
                        partners and developers.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 mb-16">
                        <Link
                            href="https://github.com/AMEV-chain"
                            target="_blank"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-panel-dark text-panel-dark-text hover:bg-panel-dark/90 px-8 py-4 rounded-2xl font-brand text-base font-black transition-all group active:scale-95"
                        >
                            <Github size={20} />
                            View on GitHub
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            href="/docs/whitepaper.pdf"
                            target="_blank"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/20 border border-panel-dark/10 hover:bg-white/30 backdrop-blur-md text-panel-dark px-8 py-4 rounded-2xl font-brand text-base font-black transition-all active:scale-95 shadow-lg shadow-amber-deep/5"
                        >
                            <FileText size={20} />
                            Download Tech Whitepaper
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
                        <div className="flex items-center gap-2">
                            <Globe size={14} className="text-panel-dark" />
                            <span className="font-brand text-[10px] font-bold text-panel-dark uppercase tracking-widest leading-none">
                                Open source
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck
                                size={14}
                                className="text-panel-dark"
                            />
                            <span className="font-brand text-[10px] font-bold text-panel-dark uppercase tracking-widest leading-none">
                                Audited 2024-Q2
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-panel-dark animate-pulse" />
                            <span className="font-brand text-[10px] font-bold text-panel-dark uppercase tracking-widest leading-none">
                                Solana devnet
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
