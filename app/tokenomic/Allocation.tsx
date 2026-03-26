"use client";

import { motion } from 'framer-motion';
import { containerVars, itemVars } from "@/app/_lib/animations";

const allocation = [
    { label: "Ecosystem & Rewards", percent: 45, color: "#FFB800", value: "450M" },
    { label: "Community Fund", percent: 20, color: "#CC9300", value: "200M" },
    { label: "Exchange Liquidity", percent: 15, color: "#996E00", value: "150M" },
    { label: "Development & Ops", percent: 12, color: "#664900", value: "120M" },
    { label: "Founding Team", percent: 8, color: "#fcfcfb", value: "80M" },
];

const supplySources = [
    { label: "Solar Rooftop", percent: 42, value: "42M", color: "#FFB800" },
    { label: "Solar Farm", percent: 38, value: "38M", color: "#00cc07" },
    { label: "Solar Floating", percent: 20, value: "20M", color: "#0bf1cf" },
];

const techSpecs = [
    { label: "Token Standard", value: "Solana SPL" },
    { label: "Decimals", value: "18" },
    { label: "Max Supply", value: "1,000,000,000" },
    { label: "Mint Authority", value: "Energy Yield Oracle" },
    { label: "Burn Mechanism", value: "P2P Transaction Burn" },
    { label: "Network", value: "Devnet" },
];

export default function TokenAllocation() {
    const size = 260;
    const strokeWidth = 28;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    let cumulativePercent = 0;

    return (
        <section className="bg-bg-alt py-20 px-6 lg:px-20 border-t border-border/5">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20"
            >
                <div className="lg:col-span-5 flex flex-col">
                    <motion.div variants={itemVars} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                                Supply & Distribution
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-brand font-black italic text-text-main tracking-tighter leading-none mb-6">
                            Supply grows with <br />
                            <span className="font-serif font-normal text-amber-deep">
                                real energy.</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-md text-text-sub leading-relaxed">
                                AMEV allocation model is strictly engineered to align digital scarcity with physical infrastructure milestones.
                                Unlike traditional inflationary tokens, our distribution is triggered by
                                energy yield verification, ensuring every circulating unit is anchored by a tangible asset class.
                            </p>
                        </div>
                    </motion.div>


                    {/* Dynamic Donut Chart */}
                    <motion.div
                        variants={itemVars}
                        className="relative flex items-center justify-center mb-16 self-center lg:self-start lg:ml-10">
                        <svg width={size} height={size} className="transform -rotate-90 drop-shadow-[0_0_15px_rgba(255,184,0,0.1)]">
                            <circle cx={center} cy={center} r={radius} stroke="var(--border)" strokeWidth={strokeWidth} fill="transparent" />
                            {allocation.map((item, idx) => {
                                const strokeDashoffset = circumference - (item.percent / 100) * circumference;
                                const rotation = (cumulativePercent / 100) * 360;
                                cumulativePercent += item.percent;
                                return (
                                    <motion.circle
                                        key={idx}
                                        initial={{ strokeDashoffset: circumference }}
                                        whileInView={{ strokeDashoffset }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        cx={center} cy={center} r={radius}
                                        stroke={item.color} strokeWidth={strokeWidth}
                                        strokeDasharray={circumference} fill="transparent"
                                        strokeLinecap="butt"
                                        style={{ transformOrigin: 'center', transform: `rotate(${rotation}deg)` }}
                                    />
                                );
                            })}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-brand font-black italic text-text-main leading-none tracking-tighter">1B</span>
                            <span className="text-[9px] font-brand text-text-main uppercase tracking-[0.3em] mt-2 italic font-bold">Total token</span>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {allocation.map((item, idx) => (
                            <motion.div key={idx} variants={itemVars} className="flex justify-between items-center group">
                                <div className="flex items-center gap-4">
                                    <div className="w-2.5 h-2.5 rounded-sm shadow-[0_0_8px_rgba(255,184,0,0.2)]" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm font-brand text-text-main group-hover:text-amber-deep transition-colors">{item.label}</span>
                                </div>
                                <div className="flex gap-4 items-baseline">
                                    <span className="text-sm font-brand text-amber-deep font-bold">{item.percent}%</span>
                                    <span className="text-sm font-brand text-text-sub tracking-tighter uppercase">{item.value}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7">
                    {/* Bars */}
                    <div className="mb-12 space-y-12">
                        <h4 className="text-[13px] font-brand uppercase tracking-[0.4em] text-amber-deep font-black italic">
                            Supply Growth engine
                        </h4>
                        <p className="text-sm">
                            Minting sources by installation type
                        </p>

                        {supplySources.map((item, idx) => (
                            <motion.div key={idx} className="space-y-4 group">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                                            style={{ backgroundColor: item.color }}
                                        />

                                        <span className="text-sm font-brand uppercase text-text-sub group-hover:text-text-main transition-colors italic">
                                            {item.label}
                                        </span>
                                    </div>
                                    <span className="text-sm font-brand text-amber-deep font-black">{item.percent}%</span>
                                </div>

                                {/* Bar */}
                                <div className="h-1.5 w-full rounded-xl overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.percent}%` }}
                                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                        className="h-full transition-shadow duration-500"
                                        style={{
                                            backgroundColor: item.color,
                                            boxShadow: `0 0 15px ${item.color}66`
                                        }}
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-[12px] font-brand text-text-sub uppercase tracking-widest italic">
                                        {item.value}
                                    </p>
                                    <span className="text-[10px] font-brand text-text-sub tracking-tighter">
                                        Active Assets • Verified
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {techSpecs.map((spec, idx) => (
                            <motion.div key={idx} variants={itemVars} className="p-8 rounded-[2rem] bg-zinc-950/20 border border-white/5 hover:border-amber-deep/10 transition-all">
                                <span className="text-[10px] font-brand uppercase tracking-[0.3em] text-text-sub block mb-3 font-black italic">{spec.label}</span>
                                <span className="text-sm font-brand italic text-text-main tracking-tight uppercase font-black">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}