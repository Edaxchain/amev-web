"use client";

import { motion } from "framer-motion";
import { Sun, Zap, Coins, RefreshCw, ArrowBigRight } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Choose your type",
        desc: "Rooftop, farm, or floating — our engineers assess your site and design the optimal system.",
        icon: <Sun className="w-5 h-5 text-amber" />
    },
    {
        id: "02",
        title: "We install everything",
        desc: "Full turnkey — engineering, permitting, installation, grid connection, and IoT smart meter.",
        icon: <Zap className="w-5 h-5 text-amber" />
    },
    {
        id: "03",
        title: "Earn SOLR tokens",
        desc: "Each kWh mints one SOLR token to your wallet via smart contract. Automatic, verified, on-chain.",
        icon: <Coins className="w-5 h-5 text-amber" />
    },
    {
        id: "04",
        title: "Trade or hold",
        desc: "Sell tokens on our exchange, hold for appreciation, or reinvest in the community energy ecosystem.",
        icon: <RefreshCw className="w-5 h-5 text-amber" />
    }
];

export default function HowItWorks() {
    return (
        <section id="works" className="bg-background py-12 md:py-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">

                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                How it works
                            </span>
                        </div>
                        <h2 className="font-brand text-3xl md:text-4xl lg:text-5xl font-[900] text-text-main leading-[1.1] tracking-tight">
                            From installation<br />
                            <span className="italic font-editorial font-light text-amber-deep">to token — automatically.</span>
                        </h2>
                    </div>
                    <p className="font-brand text-[13px] text-text-sub max-w-[280px] leading-relaxed pt-12">
                        Same four steps for all installation types. We handle the hardware, the blockchain handles the rest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`
                                relative flex flex-col p-8 pt-0 lg:pt-0
                                ${index !== steps.length - 1 ? 'lg:border-r lg:border-divider' : ''}
                                border-b border-divider lg:border-b-0
                                ${index >= steps.length - 2 ? 'md:max-lg:border-b-0' : ''}
                                last:border-b-0 max-lg:py-12
                            `}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-brand text-[11px] font-black text-amber uppercase tracking-widest">
                                    {step.id}
                                </span>
                                {index !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-3 top-2 z-10">
                                        <ArrowBigRight className="text-amber opacity-90"
                                            size={18}
                                            strokeWidth={3}
                                            fill="var(--amber)" />
                                    </div>
                                )}
                            </div>

                            <div className="w-12 h-12 bg-background border border-amber-border rounded-2xl flex items-center justify-center mb-4 shadow-sm
                            transition-all duration-300 ease-out hover:scale-120 hover:border-amber/40 hover:shadow-lg">
                                {step.icon}
                            </div>
                            <h3 className="font-brand text-lg font-black text-text-main mb-2">
                                {step.title}
                            </h3>
                            <p className="font-brand text-[13px] leading-relaxed text-text-sub">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}