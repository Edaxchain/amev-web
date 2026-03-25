"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

export default function ProjectBackground() {
    return (
        <section id="project_background" className="bg-background py-10 md:py-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">

                    {/* Left Content Text */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-[1px] w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Project Background
                            </span>
                        </div>

                        <h2 className="font-brand text-3xl md:text-4xl lg:text-5xl font-[900] text-text-main leading-[1.05] tracking-tight mb-4">
                            Building the <span className="italic font-editorial font-light text-amber-deep">smart energy</span> infrastructure of Southeast Asia.
                        </h2>

                        <div className="space-y-4 font-brand text-[15px] leading-relaxed text-text-sub max-w-xl">
                            <p>
                                The Invest Smart Community (ISC) Project is a landmark renewable energy initiative developed by Ample Rich Investors Corp.
                                and BS Industry Service Co., Ltd. under Thailand&apos;s Renewable Energy Power Plant Industry Development Master Plan.
                            </p>
                            <p>
                                The project integrates <b className="font-bold">solar power generation, grid modernisation, and blockchain FinTech </b>
                                to create a resilient, transparent, and community-owned energy ecosystem — with the long-term goal of becoming the electricity distribution hub of ASEAN.
                            </p>
                            <p>
                                Phase 1 is underway in Phichit City — a pilot covering 1,557 acres of solar infrastructure to demonstrate the model before national and regional expansion.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6 mb-6">
                            <Button className="bg-button-primary hover:bg-button-primary-hover text-button-primary-text font-brand text-xs font-bold h-12 px-8 rounded-lg transition-all group">
                                View Project Deck <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" className="border-border/50 text-text-sub font-brand text-xs font-bold h-12 px-8 rounded-lg hover:text-button-primary-text hover:border-border transition-all">
                                Contact the team
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Content Card */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Main Card Container */}
                        <div className="relative aspect-[16/10] bg-panel-dark rounded-[32px] overflow-hidden border border-border/5 shadow-2xl group cursor-crosshair">

                            {/* Sun */}
                            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-28 h-28 rounded-full bg-amber blur-3xl animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
                                        <g className="origin-center animate-[spin_60s_linear_infinite] opacity-50">
                                            {[...Array(8)].map((_, i) => (
                                                <line
                                                    key={i}
                                                    x1="50" y1="5" x2="50" y2="15"
                                                    stroke="var(--amber)"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    transform={`rotate(${i * 45} 50 50)`}
                                                />
                                            ))}
                                        </g>
                                        <circle cx="50" cy="50" r="30" fill="url(#sun-grad)" />
                                        <defs>
                                            <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
                                                <stop offset="0%" stopColor="var(--amber-pale)" />
                                                <stop offset="70%" stopColor="var(--amber)" />
                                                <stop offset="100%" stopColor="var(--amber-deep)" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-[30%] left-12 right-12 space-y-2">
                                {[...Array(3)].map((_, rowIndex) => (
                                    <div key={rowIndex} className="grid grid-cols-6 gap-x-1.5 gap-y-1">
                                        {[...Array(6)].map((_, colIndex) => (
                                            <div
                                                key={colIndex}
                                                className="h-3 border border-amber/20 rounded-sm 
                                                bg-gradient-to-br from-amber-deep/20 via-amber/15 to-amber-pale/5 shadow-[inset_0_1px_2px_rgba(245,166,35,0.1)"/>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-10 left-12">
                                <p className="font-brand text-[9px] font-bold uppercase tracking-[0.25em] text-panel-dark-text mb-1.5 opacity-80">
                                    Pilot Installation
                                </p>
                                <h3 className="font-brand text-xl font-black text-panel-dark-text tracking-tight mb-0.5">
                                    Phichit Solar Field
                                </h3>
                                <p className="font-brand text-[11px] font-medium text-panel-dark-text/40 tracking-tight">
                                    Phichit City, Thailand · Phase 1 · 1,557 acres
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}