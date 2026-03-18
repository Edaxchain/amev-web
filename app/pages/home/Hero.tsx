"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
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
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="relative flex flex-col lg:flex-row min-h-[82vh] bg-panel-dark overflow-hidden border-b-2 border-amber">            <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-amber/5 blur-[120px] pointer-events-none" />

            {/* Left Content */}
            <motion.div
                className="flex-1 flex items-center px-6 md:px-[52px] py-20 lg:py-0 z-10"
                initial="hidden"
                animate="visible"
                variants={containerVars}
            >
                <div className="max-w-2xl">
                    {/* Pills */}
                    <motion.div variants={itemVars} className="flex flex-wrap gap-2 mb-8">
                        {['Solar Installation', 'Blockchain Tokens', 'Live Exchange'].map((text) => (
                            <div key={text} className="flex items-center gap-2 bg-amber-deep/10 border border-amber-border/60 px-3 py-1.5 rounded-full shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                                <span className="font-brand text-[10px] tracking-wider text-amber">{text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 variants={itemVars} className="font-brand text-4xl md:text-6xl font-black text-panel-dark-text leading-[0.95] tracking-tighter mb-6">
                        Powering <span className="text-amber">ASEAN's</span><br />
                        clean energy <br />
                        <span className="italic font-serif font-light text-panel-dark-text">future.</span>
                    </motion.h1>

                    <motion.p variants={itemVars} className="font-brand text-lg text-panel-dark-text/50 leading-relaxed mb-10 max-w-lg">
                        AMEV is developing <span className="text-panel-dark-text">368 megawatts of renewable energy infrastructure</span> across Thailand and Southeast Asia — combining solar power generation with blockchain technology.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={itemVars} className="flex flex-wrap gap-4">
                        <Button asChild className="font-brand text-[13px] font-bold bg-button-primary text-button-primary-text hover:bg-button-primary-hover rounded-[6px] h-[52px] px-8 shadow-lg shadow-amber/10 transition-all hover:-translate-y-1">
                            <Link href="#" className="flex items-center gap-2">Get a Free Quote <ArrowRight size={18} strokeWidth={3} /></Link>
                        </Button>
                        <Button asChild variant="outline" className="font-brand text-[13px] bg-panel-dark font-medium border-panel-dark-border/60 text-panel-dark-muted hover:text-panel-dark-text hover:border-panel-dark-border rounded-[9px] h-[52px] px-8 hover:bg-bg-raised transition-all hover:-translate-y-1">
                            <Link href="#">Explore solutions</Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col items-center justify-end lg:justify-center p-6 md:p-12 relative">

                {/* Sun Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="relative flex items-center justify-center lg:mb-[-40px] z-10"
                >
                    <svg width="260" height="260" viewBox="0 0 260 260" fill="none" className="overflow-visible scale-90 md:scale-110">
                        <defs>
                            <radialGradient id="sg5" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--amber-pale)" />
                                <stop offset="45%" stopColor="var(--amber)" />
                                <stop offset="100%" stopColor="var(--amber-deep)" stopOpacity="0.8" />
                            </radialGradient>
                            <radialGradient id="gg5" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.25" /><stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
                            </radialGradient>
                            <filter id="bg5"><feGaussianBlur stdDeviation="8" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                        </defs>
                        <circle cx="130" cy="130" r="120" fill="url(#gg5)" className="animate-pulse" />
                        <g className="origin-center animate-[spin_40s_linear_infinite] opacity-10">
                            <circle cx="130" cy="130" r="108" stroke="var(--amber)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                            <circle cx="130" cy="22" r="6" fill="var(--amber)" fillOpacity="0.4" />
                        </g>
                        <g className="origin-center animate-[spin_28s_linear_infinite_reverse] opacity-20">
                            <circle cx="130" cy="130" r="88" stroke="var(--amber)" strokeWidth="1" fill="none" strokeDasharray="3 6" />
                            <circle cx="218" cy="130" r="5" fill="var(--amber)" fillOpacity="0.5" />
                        </g>
                        <g className="origin-center animate-[spin_18s_linear_infinite] opacity-30">
                            <circle cx="130" cy="130" r="68" stroke="var(--amber)" strokeWidth="1" fill="none" strokeDasharray="2 5" />
                            <circle cx="130" cy="62" r="6" fill="var(--amber)" fillOpacity="0.65" />
                        </g>
                        <g className="origin-center animate-[spin_60s_linear_infinite] opacity-60" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="130" y1="80" x2="130" y2="58" /><line x1="130" y1="180" x2="130" y2="202" />
                            <line x1="80" y1="130" x2="58" y2="130" /><line x1="180" y1="130" x2="202" y2="130" />
                            <g strokeWidth="2" opacity="0.5">
                                <line x1="95" y1="95" x2="79" y2="79" /><line x1="165" y1="165" x2="181" y2="181" />
                                <line x1="165" y1="95" x2="181" y2="79" /><line x1="95" y1="165" x2="79" y2="181" />
                            </g>
                        </g>

                        <circle cx="130" cy="130" r="44" fill="url(#sg5)" className="animate-[pulse_4s_ease-in-out_infinite]" />
                        <text x="130" y="126" textAnchor="middle" className="font-brand text-[13px] font-[900] fill-panel-dark opacity-85 uppercase select-none">SOLR</text>
                        <text x="130" y="141" textAnchor="middle" className="font-brand text-[9px] font-[500] fill-panel-dark opacity-55 uppercase select-none">TOKEN</text>
                    </svg>
                </motion.div>

                {/* Dashboard Card */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 40 }}
                    transition={{ type: "spring", damping: 15, stiffness: 60, delay: 0.8 }}
                    className="w-full max-w-md bg-amber-deep/5 backdrop-blur-xl border border-panel-dark-border rounded-t-2xl overflow-hidden shadow-2xl relative z-20 transition-all hover:border-amber/40"
                >
                    <div className="bg-amber-pale/5 px-4 py-2 flex items-center justify-between border-b border-panel-dark-border">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-amber/30" /><div className="w-2 h-2 rounded-full bg-amber/20" /><div className="w-2 h-2 rounded-full bg-amber/10" />
                        </div>
                        <div className="text-[9px] font-brand text-panel-dark-muted/60 tracking-widest">app.amev.io/dashboard</div>
                    </div>
                    <div className="p-6 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl animate-bounce">☀️</div>
                                <div>
                                    <div className="font-brand text-sm font-bold text-panel-dark-text">SOLR Token</div>
                                    <div className="font-brand text-[9px] text-panel-dark-muted/60 uppercase tracking-wider">1 token = 1 kWh generated</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-brand text-xl font-black text-panel-dark-text">$0.0412</div>
                                <div className="font-brand text-[10px] font-bold text-green-400">↑ +2.3% today</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {tokenStats.map((stat) => (
                                <div key={stat.label} className="bg-amber/5 border border-amber/10 p-4 rounded-xl hover:bg-amber/10 transition-colors cursor-default">
                                    <div className="font-brand text-[9px] font-bold text-amber/30 uppercase tracking-widest mb-1">{stat.label}</div>
                                    <div className={`font-brand text-xl font-black ${stat.up ? 'text-green-400' : 'text-white'}`}>{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber/10 border border-amber/20 p-4 rounded-xl flex justify-between items-center">
                            <div className="font-brand text-[10px] font-bold text-amber/50 uppercase">Est. monthly earnings · 100kW system</div>
                            <div className="font-brand text-lg font-black text-amber">~$1,880 / mo</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}