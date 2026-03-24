"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Sprout,
    Waves,
    ArrowRight,
    Wallet,
    Zap,
    Coins,
} from "lucide-react";

const plans = [
    {
        icon: <Building2 size={24} />,
        type: "🏢 Rooftop",
        title: "Solar Rooftop · 100 kW",
        stats: [
            {
                label: "Annual generation",
                value: "~120,000 kWh",
                icon: <Zap size={14} />,
            },
            {
                label: "SOLR minted / year",
                value: "120,000 SOLR",
                icon: <Coins size={14} />,
            },
            {
                label: "Token value / year",
                value: "~$4,944",
                icon: <Wallet size={14} />,
            },
            {
                label: "Energy savings / year",
                value: "~$17,616",
                icon: <CheckCircle2 size={14} />,
            },
        ],
        monthly: "$1,880 / mo",
        tag: "Residential & Small Commercial",
        highlight: false,
    },
    {
        icon: <Sprout size={24} />,
        type: "🌾 Farm",
        title: "Solar Farm · 1 MW",
        stats: [
            {
                label: "Annual generation",
                value: "~1,200,000 kWh",
                icon: <Zap size={14} />,
            },
            {
                label: "SOLR minted / year",
                value: "1.2M SOLR",
                icon: <Coins size={14} />,
            },
            {
                label: "Token value / year",
                value: "~$49,440",
                icon: <Wallet size={14} />,
            },
            {
                label: "Energy savings / year",
                value: "~$176,160",
                icon: <CheckCircle2 size={14} />,
            },
        ],
        monthly: "$18,800 / mo",
        tag: "Utility & Industrial Scale",
        highlight: true,
    },
    {
        icon: <Waves size={24} />,
        type: "💧 Floating",
        title: "Solar Floating · 500 kW",
        stats: [
            {
                label: "Annual generation",
                value: "~690,000 kWh",
                icon: <Zap size={14} />,
            },
            {
                label: "SOLR minted / year",
                value: "690,000 SOLR",
                icon: <Coins size={14} />,
            },
            {
                label: "Token value / year",
                value: "~$28,428",
                icon: <Wallet size={14} />,
            },
            {
                label: "Yield advantage",
                value: "+15% vs ground",
                icon: <Zap size={14} />,
            },
        ],
        monthly: "$10,580 / mo",
        tag: "Reservoirs & Water Bodies",
        highlight: false,
    },
];

// Re-using check circle from YourSite for consistency
import { CheckCircle2 } from "lucide-react";

export default function Plan() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="mx-auto px-6 md:px-[52px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Token earnings
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-brand text-5xl font-black text-text-main leading-none mb-4"
                        >
                            What your installation
                            <br />
                            <span className="italic font-editorial font-light text-amber-deep">
                                generates.
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="max-w-md font-brand text-sm text-text-sub leading-relaxed md:text-right"
                    >
                        Estimated token income per installation type based on
                        current SOLR price. Real-world results may vary based on
                        site-specific factors.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={`
                                group relative p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl
                                ${
                                    plan.highlight
                                        ? "bg-panel-dark border-panel-dark-border text-white shadow-xl shadow-black/10 scale-105 z-10"
                                        : "bg-white border-divider text-text-main hover:border-amber/40 shadow-sm"
                                }
                            `}
                        >
                            {/* Card Glow */}
                            <div
                                className={`
                                absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                                ${plan.highlight ? "bg-linear-to-br from-amber/5 via-transparent to-white/5" : "bg-linear-to-br from-amber/5 to-transparent"}
                            `}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Plan Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div
                                        className={`p-4 rounded-2xl ${plan.highlight ? "bg-amber/10 border border-amber/20" : "bg-bg-secondary border border-divider"} group-hover:scale-110 transition-transform duration-500`}
                                    >
                                        <div
                                            className={
                                                plan.highlight
                                                    ? "text-amber"
                                                    : "text-amber-deep"
                                            }
                                        >
                                            {plan.icon}
                                        </div>
                                    </div>
                                    <span
                                        className={`font-brand text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${plan.highlight ? "bg-white/10 text-amber-pale" : "bg-bg-secondary text-text-sub"}`}
                                    >
                                        {plan.tag}
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <div
                                        className={`font-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${plan.highlight ? "text-amber-pale/60" : "text-amber-deep/60"}`}
                                    >
                                        {plan.type}
                                    </div>
                                    <h3
                                        className={`font-brand text-2xl font-black mb-1 ${plan.highlight ? "text-white" : "text-text-main"}`}
                                    >
                                        {plan.title.split(" · ")[0]}
                                    </h3>
                                    <div
                                        className={`font-brand text-sm font-medium ${plan.highlight ? "text-panel-dark-muted" : "text-text-sub"}`}
                                    >
                                        {plan.title.split(" · ")[1]}
                                    </div>
                                </div>

                                {/* Stats List */}
                                <div className="space-y-4 mb-10 flex-1">
                                    {plan.stats.map((stat, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col gap-1 border-b border-divider/10 pb-4 last:border-0 last:pb-0"
                                        >
                                            <div
                                                className={`font-brand text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 ${plan.highlight ? "text-panel-dark-muted" : "text-text-sub"}`}
                                            >
                                                {stat.icon}
                                                {stat.label}
                                            </div>
                                            <div className="font-brand text-lg font-black tracking-tight">
                                                {stat.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Monthly Total */}
                                <div
                                    className={`mt-auto p-6 rounded-3xl ${plan.highlight ? "bg-white/5 border border-white/10" : "bg-panel-dark text-white"} transition-transform group-hover:scale-[1.02] duration-300`}
                                >
                                    <div className="font-brand text-[9px] font-bold text-amber uppercase tracking-widest mb-1">
                                        Estimated monthly total
                                    </div>
                                    <div className="flex items-baseline justify-between">
                                        <div className="font-brand text-3xl font-black">
                                            {plan.monthly.split(" / ")[0]}
                                            <span className="text-sm font-medium opacity-60 ml-1 text-white">
                                                / mo
                                            </span>
                                        </div>
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${plan.highlight ? "bg-amber text-panel-dark" : "bg-amber text-panel-dark"}`}
                                        >
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex items-start gap-4 p-6 rounded-3xl bg-bg-secondary/50 border border-divider max-w-2xl mx-auto"
                >
                    <div className="p-1.5 bg-amber/20 rounded-lg shrink-0">
                        <CheckCircle2 size={16} className="text-amber-deep" />
                    </div>
                    <p className="font-brand text-[11px] leading-relaxed text-text-sub">
                        * Earnings estimates based on current SOLR token price
                        of{" "}
                        <span className="text-amber-deep font-bold">
                            $0.0412
                        </span>
                        . Actual value depends on market conditions at time of
                        trading, site efficiency, and solar radiation index of
                        your specific location.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
