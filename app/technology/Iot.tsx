"use client";

import { motion } from "framer-motion";
import {
    Sun,
    Cpu,
    ShieldCheck,
    Coins,
    ArrowRight,
    Activity,
    Terminal,
} from "lucide-react";

const pipelineSteps = [
    {
        id: "01",
        icon: <Sun className="w-6 h-6 text-amber" />,
        emoji: "☀️",
        title: "Solar panel array",
        description:
            "Photovoltaic panels generate DC electricity from sunlight. Output varies with irradiance, temperature, and panel angle.",
        status: "Generating · 142 kW current output",
    },
    {
        id: "02",
        icon: <Cpu className="w-6 h-6 text-amber" />,
        emoji: "📡",
        title: "IoT smart meter oracle",
        description:
            "Certified smart meters measure AC output after the inverter. Readings are cryptographically signed and transmitted via MQTT every 60 seconds.",
        status: "Reading signed · SHA-256 verified",
    },
    {
        id: "03",
        icon: <ShieldCheck className="w-6 h-6 text-amber" />,
        emoji: "🔗",
        title: "On-chain verification",
        description:
            "The oracle program on Solana validates the signed meter reading against the registered installation. Tampered or unsigned data is rejected.",
        status: "Verified · 3 oracle confirmations",
    },
    {
        id: "04",
        icon: <Coins className="w-6 h-6 text-amber" />,
        emoji: "👛",
        title: "Automatic token mint",
        description:
            "The mint contract issues exactly one SOLR token per verified kWh. Tokens appear in the installation owner's wallet within one Solana block (~400ms).",
        status: "Minted · 142 SOLR this cycle",
    },
];

const technicalSpecs = [
    { label: "Reading frequency", value: "Every 60s" },
    { label: "Signature algorithm", value: "SHA-256" },
    { label: "Oracle confirmations", value: "3 nodes" },
    { label: "Mint latency", value: "~400ms" },
    { label: "Data protocol", value: "MQTT · TLS" },
    { label: "Meter standard", value: "IEC 62052" },
];

export default function Iot() {
    return (
        <section
            id="iot"
            className="py-10 md:py-12 flex flex-col gap-12 lg:gap-16 border-t border-divider bg-bg-alt/30"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                IoT oracle bridge
                            </span>
                        </div>
                        <h2 className="font-black font-brand text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] mb-8">
                            Bridging the physical
                            <br />
                            <span className="italic font-editorial font-light text-amber">
                                and the digital.
                            </span>
                        </h2>
                        <p className="font-brand text-xl text-text-main leading-relaxed font-medium mb-6">
                            The oracle bridge is the critical link between the
                            real world and the blockchain. It solves the
                            fundamental challenge of all energy tokens: how do
                            you prove that a real kilowatt-hour was generated?
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md md:pt-12"
                    >
                        <p className="font-brand text-base text-text-sub leading-relaxed">
                            Solarc's answer is a purpose-built oracle layer —
                            certified IoT meters that cryptographically sign
                            every energy reading before transmitting it
                            on-chain. The smart contract will only mint tokens
                            for signed, verified, and cross-referenced data.
                        </p>
                    </motion.div>
                </div>

                {/* Pipeline Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative">
                    {/* Connection lines (desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-divider hidden lg:block -z-10" />

                    {pipelineSteps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-background border border-divider p-8 rounded-3xl shadow-sm hover:border-amber/40 transition-all duration-500 group relative"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 bg-amber-tint rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-amber/10">
                                        {step.icon}
                                    </div>
                                    <span className="font-brand text-[10px] font-black text-amber uppercase tracking-widest bg-amber/5 px-3 py-1 rounded-full border border-amber/10">
                                        Step {step.id}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-brand text-lg font-black tracking-tight flex items-center gap-2">
                                        {step.title}
                                    </h3>
                                    <p className="font-brand text-sm text-text-sub leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-divider flex items-center gap-2">
                                    <Activity
                                        size={14}
                                        className="text-amber animate-pulse"
                                    />
                                    <span className="font-brand text-[11px] font-bold text-amber-deep">
                                        {step.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Specs & Deep Dive */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Specs Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1 bg-bg-secondary border border-divider rounded-3xl p-8"
                    >
                        <h4 className="font-brand text-[11px] font-black text-amber uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                            <Terminal size={14} />
                            Technical Specifications
                        </h4>
                        <div className="space-y-6">
                            {technicalSpecs.map((spec) => (
                                <div
                                    key={spec.label}
                                    className="flex justify-between items-center border-b border-divider pb-4 last:border-0 last:pb-0"
                                >
                                    <span className="font-brand text-[11px] font-bold text-text-sub uppercase tracking-wider">
                                        {spec.label}
                                    </span>
                                    <span className="font-brand text-sm font-black text-text-main">
                                        {spec.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Additional Content / Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 bg-text-main p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-center"
                    >
                        {/* Background Visual bits */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 blur-[100px] rounded-full" />

                        <h3 className="font-brand text-3xl font-black text-text-main-inverted mb-6 tracking-tight relative z-10">
                            The Proof-of-Generation <br />
                            <span className="text-amber italic font-editorial font-light">
                                consensus engine.
                            </span>
                        </h3>
                        <p className="font-brand text-lg text-text-sub-inverted leading-relaxed mb-8 relative z-10 max-w-xl">
                            By combining certified hardware with on-chain
                            cryptographic validation, we eliminate the need for
                            third-party auditing and manual verification cycles.
                            The result is a trustworthy, high-speed ecosystem
                            where energy becomes value in milliseconds.
                        </p>
                        <div className="flex relative z-10">
                            <button className="flex items-center gap-3 bg-amber hover:bg-amber-deep text-text-main font-brand text-sm font-black px-8 py-4 rounded-2xl transition-all duration-300">
                                Read the technical whitepaper
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
