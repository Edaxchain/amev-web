'use client'
import { motion } from "framer-motion";
import { containerVars, itemVars } from "@/app/_lib/animations";


export default function Timeline() {
    const timelineData = [
        {
            year: "2018 - 2020",
            status: "Complete",
            title: "Foundation & Vision",
            items: [
                "Concept Generation & Core Team Assemble",
                "Strategic Energy Master Plan & Site Survey",
                "Infrastructure Site Acquisition & Procurement"
            ]
        },
        {
            year: "2021 - 2022",
            status: "Complete",
            title: "Market Entry & Pilot RWA",
            items: [
                "AME Tokenization & DeFi Listing (PancakeSwap)",
                "600kW Solar Rooftop Launch (Vietnam)",
                "REST Lending Platform & CEX Listing (Bankcex/Nexdax)"
            ]
        },
        {
            year: "2023 - 2027",
            status: "Active",
            title: "Ecosystem & Digital Economy",
            items: [
                "Launch EDAX Energy Exchange & Smart POS",
                "Super Dapp Development & Multi-Chain Protocol",
                "Integration of Smart Grid Monitoring Systems"
            ]
        },
        {
            year: "2028 - 2030",
            status: "Future",
            title: "ASEAN Energy Connectivity",
            items: [
                "Build 140MW Solar Power Plant (QDP Stage II)",
                "Full Scale ASEAN Grid Connectivity",
                "Launch Full Operational AI-Smart Contracts"
            ]
        },
    ];

    return (
        <section id='journey' className="scroll-mt-40 bg-panel-dark py-8 lg:py-16 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-6 mb-20">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-amber-deep"
                    />
                    <span className="font-mono text-[12px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                        Implementation Plan
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <h2 className="text-5xl lg:text-6xl font-brand italic tracking-tighter text-panel-dark-text leading-[0.85]">
                        Project <br /> <span className="text-amber-deep font-editorial normal-case tracking-normal">Timeline.</span>
                    </h2>
                    <p className="text-panel-dark-text/30 font-light text-lg italic leading-tight lg:text-right max-w-sm lg:ml-auto">
                        A phased approach from conceptualization to full ASEAN grid connectivity.
                    </p>
                </div>
            </div>
            <div className="relative mt-6 mb-6">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-800 hidden lg:block">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "66%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-panel-dark-text shadow-[0_0_15px_var(--panel-dark-text)]"
                    />

                    <div className="w-full h-full grid grid-cols-4 z-20">
                        {timelineData.map((data, idx) => (
                            <div key={idx} className="relative h-full flex justify-center">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: data.status ? 1.25 : 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (idx * 0.4), duration: 0.5 }}
                                    className={`absolute -top-2 w-4 h-4 rounded-full border-2 transition-all duration-500 
                                        ${data.status === "Complete"
                                            ? "bg-green-500 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                            : data.status === "Active"
                                                ? "bg-amber border-amber shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                                                : "bg-zinc-900 border-zinc-700"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>



                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10 pt-16"
                >
                    {timelineData.map((data, index) => (
                        <TimelineCard key={index} {...data} variants={itemVars} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const TimelineCard = ({ year, title, items, status, variants }: any) => (
    <motion.div
        variants={variants}
        className={`p-6 rounded-2xl border transition-all duration-500 group flex flex-col h-full 
            ${status === "Complete"
                ? "border-green-500"
                : status === "Active"
                    ? "border-amber-deep"
                    : "border-zinc-700"
            } 
            `}
    >

        <div className="group flex flex-col gap-1 mb-6">
            <span className={`font-mono text-xl font-bold tracking-tighter text-panel-dark-text lg:text-panel-dark-muted group-hover:text-panel-dark-text transition-colors`}>
                {year}
            </span>
            <h3 className={`text-md font-bold uppercase tracking-tight mb-4 leading-tight text-panel-dark-text lg:text-panel-dark-muted group-hover:text-panel-dark-text transition-colors`}>
                {title}
            </h3>
        </div>
        <ul className="flex flex-col gap-3 flex-grow mb-8">
            {items.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-[11px] leading-relaxed text-panel-dark-muted group-hover:text-panel-dark-text transition-colors">
                    <span className="text-panel-dark-text lg:text-panel-dark-muted group-hover:text-panel-dark-text transition-colors">•</span>
                    {item}
                </li>
            ))}
        </ul>

        <div className="mt-auto pt-4">
            <span className={`text-[8px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded border 
            ${status === "Complete" ? "border-green-500/20 text-green-500/80 bg-green-500/5" :
                    status === "Active" ? "border-amber-deep/40 text-amber-deep bg-amber-deep/5" :
                        "border-zinc-800 text-zinc-600"
                }`}>
                {status}
            </span>
        </div>
    </motion.div>
);