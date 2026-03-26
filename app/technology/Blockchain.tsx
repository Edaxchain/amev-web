"use client";

import { motion } from "framer-motion";
import { Link, Zap, Leaf, ShieldCheck } from "lucide-react";

const blockchainFeatures = [
    {
        icon: <Link className="w-5 h-5 text-amber" />,
        title: "Immutable ledger",
        description:
            "Every token mint, transfer, and trade is permanently recorded. No data can be altered or deleted after confirmation.",
    },
    {
        icon: <Zap className="w-5 h-5 text-amber" />,
        title: "Sub-second finality",
        description:
            "Solana's 400ms block time means tokens appear in wallets within seconds of energy being generated and verified.",
    },
    {
        icon: <Leaf className="w-5 h-5 text-amber" />,
        title: "Energy-efficient consensus",
        description:
            "Solana's Proof-of-History + Proof-of-Stake uses a fraction of the energy of proof-of-work chains — appropriate for a green energy platform.",
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-amber" />,
        title: "Non-custodial by design",
        description:
            "Tokens mint directly to the user's own wallet. Solarc never holds, controls, or has access to user assets at any point.",
    },
];

export default function Blockchain() {
    return (
        <section
            id="blockchain"
            className="bg-bg-alt py-10 md:py-12 flex flex-col gap-12 lg:gap-16 border-t border-divider"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Blockchain layer
                            </span>
                        </div>
                        <h2 className="font-black font-brand text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9]">
                            Every kWh recorded
                            <br />
                            <span className="italic font-editorial font-light text-amber">
                                on-chain.
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-10"
                    >
                        <div className="flex flex-col gap-8">
                            <p className="font-brand text-xl md:text-2xl leading-relaxed font-medium">
                                The Solarc blockchain layer sits between the IoT
                                oracle and the end user&apos;s wallet. Every
                                energy event — from generation to token transfer
                                — is recorded immutably on the Solana ledger.
                            </p>
                            <p className="font-brand text-lg text-text-sub leading-relaxed">
                                Unlike traditional energy certificates which are
                                issued manually and stored in centralised
                                registries, SOLR tokens are minted automatically
                                and in real time — one token per verified
                                kilowatt-hour, with no human intervention in the
                                minting process.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mt-4">
                            {blockchainFeatures.map((feature, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-brand text-base font-black uppercase tracking-wider">
                                            {feature.title}
                                        </h4>
                                        <p className="font-brand text-sm text-text-sub leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side Visual - Abstract Blockchain Pulse */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative hidden lg:flex items-center justify-center aspect-square"
                    >
                        {/* Glow Background */}
                        <div className="absolute inset-0 bg-amber/5 blur-[120px] rounded-full" />

                        {/* Abstract Geometry */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <svg
                                viewBox="0 0 400 400"
                                className="w-full h-full text-amber/20"
                            >
                                <defs>
                                    <linearGradient
                                        id="grid-grad"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="currentColor"
                                            stopOpacity="0"
                                        />
                                        <stop
                                            offset="50%"
                                            stopColor="currentColor"
                                            stopOpacity="1"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="currentColor"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>

                                {/* Grid Pattern */}
                                <pattern
                                    id="dots"
                                    x="0"
                                    y="0"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="1.5"
                                        fill="currentColor"
                                    />
                                </pattern>
                                <rect
                                    width="400"
                                    height="400"
                                    fill="url(#dots)"
                                />

                                {/* Animated Rings */}
                                <circle
                                    cx="200"
                                    cy="200"
                                    r="120"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="animate-[pulse_4s_infinite]"
                                />
                                <circle
                                    cx="200"
                                    cy="200"
                                    r="160"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    strokeDasharray="4 8"
                                    className="animate-[spin_60s_linear_infinite]"
                                />

                                {/* Floating Nodes */}
                                <circle
                                    cx="100"
                                    cy="150"
                                    r="4"
                                    fill="var(--amber)"
                                    className="animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                />
                                <circle
                                    cx="300"
                                    cy="180"
                                    r="3"
                                    fill="var(--amber)"
                                    className="animate-bounce"
                                    style={{ animationDelay: "0.5s" }}
                                />
                                <circle
                                    cx="220"
                                    cy="320"
                                    r="5"
                                    fill="var(--amber)"
                                    className="animate-bounce"
                                    style={{ animationDelay: "0.8s" }}
                                />
                            </svg>

                            <div className="absolute w-40 h-40 bg-bg-sub/40 backdrop-blur-3xl border border-amber/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,166,35,0.15)]">
                                <div className="text-4xl font-black text-amber italic font-editorial">
                                    SOLR
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
