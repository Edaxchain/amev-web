"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Hero() {
    const tokenStats = [
        { label: "Minted today", value: "8,420" },
        { label: "Your balance", value: "14,280", up: true },
        { label: "Total supply", value: "2.4M" },
        { label: "Wallets", value: "18,400" },
    ];

    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative flex flex-col lg:flex-row h-auto lg:h-[60vh] min-h-[540px] bg-panel-dark overflow-hidden border-b border-amber/10 items-start pt-4 lg:pt-6"
        >
            {/* Background Glow */}
            <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-amber/5 blur-[120px] pointer-events-none" />
            {/* Left Content */}
            <motion.div
                className="flex-1 w-full flex flex-col items-center lg:items-start px-6 md:px-[52px] py-6 lg:py-0 z-10 text-center lg:text-left justify-center"
                initial="hidden"
                animate="visible"
                variants={containerVars}
            >
                <div className="max-w-2xl flex flex-col">
                    {/* Pills */}
                    <motion.div
                        variants={itemVars}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                        <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                            Solar Installation Solutions
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVars}
                        className="font-brand text-4xl md:text-6xl font-black text-panel-dark-text leading-[0.95] tracking-tighter mb-6"
                    >
                        Every site <br />
                        has a <span className="text-amber">solar</span>
                        <br />
                        <span className="italic font-editorial font-light text-panel-dark-text">
                            solution.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="font-brand text-lg text-panel-dark-muted leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
                    >
                        Three installation types designed for every location.
                        Rooftops, open land, or water bodies — each generates{" "}
                        <span className="text-panel-dark-text">
                            SOLR tokens automatically
                        </span>{" "}
                        from day one.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVars}
                        className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4"
                    >
                        {["Solar Rooftop", "Solar Farm", "Solar Floating"].map(
                            (text) => (
                                <div
                                    key={text}
                                    className="flex items-center gap-2 bg-amber-deep/10 border border-amber-border/60 px-3 py-1.5 rounded-full shadow-sm"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                                    <span className="font-brand text-[10px] tracking-wider text-amber">
                                        {text}
                                    </span>
                                </div>
                            ),
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Content */}
            <div className="flex-1 w-full flex items-center justify-center lg:justify-end h-full">
                {/* Sun Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 0.8 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="relative flex items-center justify-center lg:mb-[-80px] z-10"
                >
                    <svg
                        width="500"
                        height="500"
                        viewBox="0 0 260 260"
                        fill="none"
                        className="overflow-visible scale-90 md:scale-110"
                    >
                        <defs>
                            <radialGradient id="sg5" cx="50%" cy="50%" r="50%">
                                <stop
                                    offset="0%"
                                    stopColor="var(--amber-pale)"
                                />
                                <stop offset="45%" stopColor="var(--amber)" />
                                <stop
                                    offset="100%"
                                    stopColor="var(--amber-deep)"
                                    stopOpacity="0.8"
                                />
                            </radialGradient>
                            <radialGradient id="gg5" cx="50%" cy="50%" r="50%">
                                <stop
                                    offset="0%"
                                    stopColor="var(--amber)"
                                    stopOpacity="0.25"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="var(--amber)"
                                    stopOpacity="0"
                                />
                            </radialGradient>
                            <filter id="bg5">
                                <feGaussianBlur stdDeviation="8" result="b" />
                                <feMerge>
                                    <feMergeNode in="b" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <circle
                            cx="130"
                            cy="130"
                            r="120"
                            fill="url(#gg5)"
                            className="animate-pulse"
                        />
                        <g className="origin-center animate-[spin_40s_linear_infinite] opacity-10">
                            <circle
                                cx="130"
                                cy="130"
                                r="108"
                                stroke="var(--amber)"
                                strokeWidth="1"
                                fill="none"
                                strokeDasharray="4 8"
                            />
                            <circle
                                cx="130"
                                cy="22"
                                r="6"
                                fill="var(--amber)"
                                fillOpacity="0.4"
                            />
                        </g>
                        <g className="origin-center animate-[spin_28s_linear_infinite_reverse] opacity-20">
                            <circle
                                cx="130"
                                cy="130"
                                r="88"
                                stroke="var(--amber)"
                                strokeWidth="1"
                                fill="none"
                                strokeDasharray="3 6"
                            />
                            <circle
                                cx="218"
                                cy="130"
                                r="5"
                                fill="var(--amber)"
                                fillOpacity="0.5"
                            />
                        </g>
                        <g className="origin-center animate-[spin_18s_linear_infinite] opacity-30">
                            <circle
                                cx="130"
                                cy="130"
                                r="68"
                                stroke="var(--amber)"
                                strokeWidth="1"
                                fill="none"
                                strokeDasharray="2 5"
                            />
                            <circle
                                cx="130"
                                cy="62"
                                r="6"
                                fill="var(--amber)"
                                fillOpacity="0.65"
                            />
                        </g>
                        <g
                            className="origin-center animate-[spin_60s_linear_infinite] opacity-60"
                            stroke="var(--amber)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        >
                            <line x1="130" y1="80" x2="130" y2="58" />
                            <line x1="130" y1="180" x2="130" y2="202" />
                            <line x1="80" y1="130" x2="58" y2="130" />
                            <line x1="180" y1="130" x2="202" y2="130" />
                            <g strokeWidth="2" opacity="0.5">
                                <line x1="95" y1="95" x2="79" y2="79" />
                                <line x1="165" y1="165" x2="181" y2="181" />
                                <line x1="165" y1="95" x2="181" y2="79" />
                                <line x1="95" y1="165" x2="79" y2="181" />
                            </g>
                        </g>

                        <circle
                            cx="130"
                            cy="130"
                            r="44"
                            fill="url(#sg5)"
                            className="animate-[pulse_4s_ease-in-out_infinite]"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
