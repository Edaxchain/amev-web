"use client";

import { motion } from 'framer-motion';
import { Zap, ShoppingCart, RefreshCcw, TrendingUp, ArrowRight, Globe, FileText } from 'lucide-react';
import { containerVars, itemVars } from "@/app/_lib/animations";
import { Button } from '../_components/ui/button';

const flywheelSteps = [
    {
        title: "Energy Revenue",
        icon: <Zap size={20} />,
        desktopPos: "top-0 left-1/2 -translate-x-1/2",
        desc: "Revenue from ISC Solar energy sales to the grid."
    },
    {
        title: "Buy-back",
        icon: <ShoppingCart size={20} />,
        desktopPos: "right-0 top-1/2 -translate-y-1/2",
        desc: "AMEV tokens repurchase from open market."
    },
    {
        title: "Rewards",
        icon: <RefreshCcw size={20} />,
        desktopPos: "bottom-0 left-1/2 -translate-x-1/2",
        desc: "Tokens distributed to stakers, reducing supply."
    },
    {
        title: "Value Accrual",
        icon: <TrendingUp size={20} />,
        desktopPos: "left-0 top-1/2 -translate-y-1/2",
        desc: "Natural price appreciation from scarcity."
    },
];

export default function HeaderT() {
    return (
        <section className="bg-panel-dark py-16 px-6 lg:px-20 border-t border-border relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber/10 blur-[120px] pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
            >
                <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
                    <motion.div variants={itemVars} className="flex items-center gap-4 justify-center lg:justify-start">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            className="h-[1px] bg-amber-deep"
                        />
                        <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                            Tokenomic
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVars}
                        className="text-4xl lg:text-5xl font-brand font-black italic text-panel-dark-text tracking-tighter leading-none"
                    >
                        Value <br />
                        <span className="font-serif italic font-normal text-amber-deep normal-case">Cycle.</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVars}
                        className="max-w-xl text-md text-panel-dark-muted italic leading-relaxed"
                    >
                        AMEV tokenomic is strictly engineered as a <strong className='text-panel-dark-text'>perpetual growth engine</strong>, aligning physical energy yield with digital scarcity for sustainable long-term value.
                    </motion.p>
                    <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 mt-4 justify-center lg:justify-start">
                        <Button
                            size="sm"
                            className="rounded-full bg-button-primary hover:bg-button-primary-hover text-button-primary-text font-brand font-black px-8 h-14 shadow-[0_20px_40px_-10px_rgba(255,184,0,0.3)] transition-all hover:scale-105"
                        >
                            CONNECT WALLET
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-panel-dark-border bg-transparent text-panel-dark-muted hover:bg-button-primary-hover hover:text-button-primary-text font-brand text-sm px-6 h-14"
                        >
                            <Globe className="mr-2 h-4 w-4" />
                            Explorer
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-panel-dark-border bg-transparent text-panel-dark-muted hover:bg-button-primary-hover hover:text-button-primary-text font-brand text-sm px-6 h-14"
                        >
                            <FileText className="mr-2 h-3 w-3" />
                            Technical Whitepaper
                        </Button>
                    </motion.div>

                </div>

                <motion.div
                    variants={itemVars}
                    className="lg:col-span-6 relative hidden md:flex items-center justify-center h-[550px] w-full max-w-[550px] mx-auto z-10"
                >

                    <div className="absolute z-20 scale-125">
                        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" className="overflow-visible">
                            <defs>
                                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="var(--amber-pale)" />
                                    <stop offset="45%" stopColor="var(--amber)" />
                                    <stop offset="100%" stopColor="var(--amber-deep)" stopOpacity="0.8" />
                                </radialGradient>
                                <radialGradient id="sunOuterGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <circle cx="130" cy="130" r="120" fill="url(#sunOuterGlow)" className="animate-pulse" />

                            <g className="origin-center animate-[spin_40s_linear_infinite] opacity-10">
                                <circle cx="130" cy="130" r="108" stroke="var(--amber)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                            </g>
                            <g className="origin-center animate-[spin_28s_linear_infinite_reverse] opacity-20">
                                <circle cx="130" cy="130" r="88" stroke="var(--amber)" strokeWidth="1" fill="none" strokeDasharray="3 6" />
                            </g>
                            <circle cx="130" cy="130" r="44" fill="url(#sunGlow)" className="animate-[pulse_4s_ease-in-out_infinite]" />

                            <text x="130" y="126" textAnchor="middle" className="font-brand text-[13px] font-[900] fill-zinc-950 uppercase select-none italic">
                                AMEV
                            </text>
                            <text x="130" y="141" textAnchor="middle" className="font-brand text-[9px] font-[500] fill-zinc-950 opacity-70 uppercase select-none italic">
                                TOKEN
                            </text>
                        </svg>
                    </div>

                    <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-amber/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
                    {flywheelSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`absolute ${step.desktopPos} flex flex-col items-center group w-[180px] text-center z-30`}
                        >
                            <div className="w-16 h-16 rounded-[2.5rem] bg-panel-dark border border-panel-dark-border flex items-center justify-center text-amber-deep group-hover:bg-amber-deep group-hover:text-panel-dark-text transition-all duration-300 shadow-xl">
                                {step.icon}
                            </div>
                            <div className="mt-2 space-y-1 pointer-events-none">
                                <h4 className="text-xs font-brand font-black text-panel-dark-text">
                                    {step.title}
                                </h4>
                                <p className="text-xs font-brand text-panel-dark-muted leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Mobile */}
                <div className="lg:col-span-12 md:hidden space-y-10">
                    {flywheelSteps.map((step, idx) => (
                        <motion.div key={idx} variants={itemVars} className="flex flex-col items-center text-center p-8 rounded-3xl bg-panel-dark border border-panel-dark-border">
                            <div className="w-16 h-16 rounded-3xl bg-panel-dark border border-panel-dark-border flex items-center justify-center text-amber-deep mb-8 shadow-xl">
                                {step.icon}
                            </div>
                            <h4 className="text-xs font-brand font-black text-panel-dark-text mb-2">
                                {step.title}
                            </h4>
                            <p className="text-xs font-brand italic text-panel-dark-muted max-w-sm">
                                {step.desc}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}