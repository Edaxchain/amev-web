"use client";

import { motion } from "framer-motion";

const layers = [
    {
        number: "04",
        name: "Application Layer",
        description: "Dashboard · Exchange · Wallet · API",
        tech: "React · Next.js · Solana Web3.js",
    },
    {
        number: "03",
        name: "Blockchain Layer",
        description: "SOLR token · Smart contracts · On-chain settlement",
        tech: "Solana · SPL Token · Rust",
    },
    {
        number: "02",
        name: "Oracle Bridge Layer",
        description: "IoT smart meters · Data verification · Minting triggers",
        tech: "IoT · Chainlink-style oracle · MQTT",
    },
    {
        number: "01",
        name: "Physical Layer",
        description: "Solar panels · Inverters · Grid connection · Sensors",
        tech: "IEC 61215 · ISO 9001 · IoT sensors to flex",
    },
];

export default function Architecture() {
    return (
        <section
            id="architecture"
            className="py-10 md:py-12 flex flex-col gap-12 lg:gap-16"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Architecture overview
                            </span>
                        </div>
                        <h2 className="font-black font-brand text-4xl md:text-5xl ">
                            A four-layer
                            <br />
                            <span className="italic font-editorial font-light text-amber">
                                tech stack.
                            </span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl font-brand text-sm md:text-base md:text-right md:pt-12 leading-relaxed text-right"
                    >
                        Solarc&apos;s infrastructure connects physical power
                        plants to the Solana blockchain through a purpose-built
                        oracle and smart contract layer, ensuring every watt is
                        accounted for on-chain.
                    </motion.p>
                </div>

                {/* Layers Grid */}
                <div className="flex flex-col gap-4">
                    {layers.map((layer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: idx * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative flex flex-col md:flex-row items-center md:items-stretch bg-bg-secondary border border-divider hover:border-amber/40 hover:bg-bg-tertiary rounded-3xl overflow-hidden p-8 transition-all duration-500"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Number & Name */}
                            <div className="md:w-1/3 flex flex-col justify-center mb-8 md:mb-0">
                                <span className="font-brand text-[11px] font-black text-amber uppercase tracking-[0.5em] mb-3 block">
                                    Layer {layer.number}
                                </span>
                                <h3 className="font-brand text-2xl md:text-3xl font-black tracking-tighter">
                                    {layer.name}
                                </h3>
                            </div>

                            {/* Details */}
                            <div className="md:w-2/3 flex flex-col justify-center md:pl-12 border-t md:border-t-0 md:border-l border-divider pt-8 md:pt-0">
                                <p className="font-brand text-lg md:text-xl mb-6 leading-tight font-medium">
                                    {layer.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {layer.tech.split(" · ").map((t, i) => (
                                        <span
                                            key={i}
                                            className="font-brand text-[10px] font-bold uppercase tracking-[0.15em] border border-divider bg-bg-secondary px-4 py-1.5 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
