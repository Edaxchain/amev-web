"use client";

import { motion } from 'framer-motion';
import { containerVars, itemVars } from "@/app/_lib/animations";
import CountUpNumber from '@/app/_lib/count';
import { Zap, Cpu, ShieldCheck, Wallet, FileCheck } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Solar Energy Generated",
        desc: "High-efficiency PV panels at ISC Pichit convert sunlight into AC electricity. Output varies with real-time irradiance.",
        icon: <Zap size={18} />,
        tech: "Real-time generation • kW output"
    },
    {
        id: "02",
        title: "IoT Meter Reading Signed",
        desc: "Smart meters measure cumulative kWh. Data is cryptographically signed and transmitted via secure MQTT protocol.",
        icon: <Cpu size={18} />,
        tech: "SHA-256 signed • TLS encrypted"
    },
    {
        id: "03",
        title: "Oracle Verification On-chain",
        desc: "EVM-compatible Oracles validate the signed data against registered ISC assets. Invalid data is discarded.",
        icon: <ShieldCheck size={18} />,
        tech: "Decentralized Oracle Consensus"
    },
    {
        id: "04",
        title: "$AMEV Tokens Minted",
        desc: "The smart contract issues exactly 1 AMEV per verified kWh. Tokens arrive in the ecosystem treasury or owner's wallet.",
        icon: <Wallet size={18} />,
        tech: "1 kWh = 1 AMEV • Zero latency"
    },
    {
        id: "05",
        title: "I-REC Certificate Issued",
        desc: "Simultaneously, a digital Renewable Energy Certificate is recorded on-chain, permanently linked to the minted tokens.",
        icon: <FileCheck size={18} />,
        tech: "I-REC Standard • Permanent Record"
    }
];

export default function MintingModel() {
    return (
        <section className="bg-background py-24 px-6 lg:px-20 border-t border-border relative overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10"
            >
                <div className="lg:col-span-12 flex flex-col lg:flex-row lg:items-end lg:justify-between mb-2 gap-4">
                    <motion.div variants={itemVars} className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                                Minting Model
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-brand font-black italic text-text-main tracking-tighter leading-none">
                            How tokens are <br />
                            <span className="font-serif font-normal text-amber-deep normal-case">created.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        variants={itemVars}
                        className="max-w-[280px] text-md text-text-sub italic leading-relaxed text-center lg:text-right"
                    >
                        A fully automated, oracle-driven minting process. No human approval required at any step.
                    </motion.p>
                </div>
                <div className="lg:col-span-7">
                    <div className="space-y-2">
                        {steps.map((step, idx) => (
                            <motion.div key={idx} variants={itemVars} className="flex gap-3 group">
                                <span className="font-brand text-xs text-text-sub font-bold pt-1">{step.id}</span>
                                <div className="flex-1 pb-2 border-b border-divider group-last:border-none">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center text-amber-deep border border-amber-border group-hover:bg-amber group-hover:text-text-main transition-all duration-300">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-brand font-black italic text-text-main tracking-tight uppercase">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-text-sub leading-relaxed mb-2 max-w-xl">
                                        {step.desc}
                                    </p>
                                    <span className="text-sm font-brand text-amber-deep italic font-bold">
                                        ● {step.tech}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <motion.div
                        variants={itemVars}
                        className="sticky top-32 p-10 rounded-[2.5rem] bg-panel-dark border border-panel-dark-border backdrop-blur-xl"
                    >
                        <span className="font-brand text-[10px] uppercase tracking-[0.3em] text-panel-dark-muted block mb-4 font-bold italic">
                            Current Mint Rate
                        </span>

                        <div className="mb-3">
                            <h4 className="text-5xl font-brand font-black mb-2">
                                <CountUpNumber
                                    value="8,420"
                                    duration={2.5}
                                    className='italic text-panel-dark-text tracking-tighter'
                                />
                            </h4>
                            <p className="text-[10px] font-mono text-amber-deep uppercase tracking-widest font-black italic">
                                $AMEV tokens minted today
                            </p>
                        </div>

                        <div className="space-y-6 pt-2">
                            {[
                                { label: "Per hour (avg)", value: "351 AMEV" },
                                { label: "Per day (avg)", value: "8,420 AMEV" },
                                { label: "Per month (proj.)", value: "252,600 AMEV" },
                                { label: "Per year (proj.)", value: "3.07M AMEV" },
                                { label: "Active Installations", value: "ISC Pichit Phase 1" },
                            ].map((stat, i) => (
                                <div key={i} className="flex justify-between items-center group">
                                    <span className="text-[10px] font-brand text-panel-dark-text uppercase tracking-widest group-hover:text-amber transition-colors">
                                        {stat.label}
                                    </span>
                                    <span className="text-xs font-brand font-bold italic">
                                        <CountUpNumber
                                            value={stat.value}
                                            duration={2.5}
                                            className="text-panel-dark-text group-hover:text-amber transition-colors duration-300"
                                        />
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 py-4 px-6 rounded-2xl bg-amber-deep/5 border border-amber-border flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[9px] font-mono text-panel-dark-text uppercase tracking-widest font-bold">
                                    Minting live now
                                </span>
                            </div>
                            <span className="text-sm font-brand font-black italic leading-none">
                                <CountUpNumber
                                    value='2,443,225'
                                    duration={2.5}
                                    className='text-panel-dark-text'
                                />
                            </span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}