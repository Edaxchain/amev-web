"use client";

import { motion} from "framer-motion";
import { Play, Volume2, Maximize } from "lucide-react";

const stats = [
    {
        label: "Project area",
        val: "1,557",
        subtitle: "Acres · Phase 1",
    },
    {
        label: "Target capacity",
        val: "368 MW",
        subtitle: "Full project",
    },
    {
        label: "Annual generation",
        val: "440M",
        subtitle: "kWh at full capacity",
    },
    {
        label: "SOLR minted/yr",
        val: "440M",
        subtitle: "Tokens at full capacity",
    },
];

export default function Pilot() {
    return (
        <section
            id="pilot"
            className="bg-panel-dark py-10 md:py-12 flex flex-col gap-12 lg:gap-16"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Pilot Project
                            </span>
                        </div>
                        <h2 className="font-black font-brand text-4xl text-white ">
                            Phichit City
                            <br />
                            <span className="italic font-editorial font-light text-amber">
                                Where it all began.
                            </span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl font-brand text-[13px] md:text-right md:pt-12 leading-relaxed text-panel-dark-muted text-right"
                    >
                        Developed under Thailand&apos;s national renewable
                        energy framework in partnership with leading engineering
                        and investment groups.
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-8">
                    {/* Video Player Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 60,
                            delay: 0.6,
                        }}
                        className="grow w-full max-w-2xl aspect-video bg-amber-deep/5 backdrop-blur-xl border border-panel-dark-border rounded-2xl overflow-hidden shadow-2xl relative z-20 group cursor-pointer"
                    >
                        {/* Video Mock/Thumbnail */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-fe5bb6583e2f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-panel-dark via-transparent to-transparent opacity-80" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 md:w-20 md:h-20 bg-amber rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,166,35,0.4)] group-hover:shadow-[0_0_50px_rgba(245,166,35,0.6)] transition-all"
                            >
                                <Play className="text-panel-dark ml-1 w-8 h-8 fill-panel-dark" />
                            </motion.div>
                        </div>

                        {/* Video UI - Bottom Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 bg-linear-to-t from-panel-dark/90 to-transparent">
                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "30%" }}
                                    className="h-full bg-amber"
                                />
                            </div>

                            <div className="flex justify-between items-center text-white/80">
                                <div className="flex items-center gap-4">
                                    <div className="text-xs font-brand font-bold tracking-widest uppercase">
                                        ISC Project · Overview
                                    </div>
                                    <div className="text-[10px] opacity-60">
                                        02:45 / 08:30
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Volume2 className="w-4 h-4 hover:text-amber transition-colors" />
                                    <Maximize className="w-4 h-4 hover:text-amber transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Live Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 bg-panel-dark/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-[9px] font-brand font-black text-white uppercase tracking-widest">
                                Master Plan
                            </span>
                        </div>
                    </motion.div>

                    {/* Stats/Quote Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 60,
                            delay: 0.8,
                        }}
                        className="w-full border border-panel-dark-border rounded-2xl overflow-hidden relative transition-all hover:border-amber/40"
                    >
                        <div className="bg-amber-pale/5 px-4 py-2 flex items-center justify-between border-b border-panel-dark-border">
                            <div className="flex items-center gap-3 p-3">
                                <div className="text-2xl animate-bounce">
                                    ☀️
                                </div>
                                <div>
                                    <div className="font-brand text-xl font-bold text-panel-dark-text">
                                        Phichit City Pilot Installation
                                    </div>
                                    <div className="font-brand text-[10px] text-panel-dark-muted/60 uppercase tracking-wider">
                                        Phichit Province, Thailand · Phase 1 ·
                                        ISC Project · Est. 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="grid grid-cols-2 mb-3">
                                {stats.map((status, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 border-panel-dark-border/30 ${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-b" : ""}`}
                                    >
                                        <p className="text-amber text-[9px] font-bold uppercase tracking-widest mb-1">
                                            {status.label}
                                        </p>
                                        <div className="text-lg font-black tracking-tight text-panel-dark-text">
                                            {status.val}
                                        </div>
                                        <div className="text-sm font-black tracking-tight text-panel-dark-text/60">
                                            {status.subtitle}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-amber-pale/5 px-4 py-4 flex flex-col gap-3 border-t border-panel-dark-border">
                            <p className="italic font-editorial font-light text-panel-dark-text/80 text-[13px] leading-relaxed">
                                &quot;A landmark project that demonstrates how
                                renewable energy infrastructure and blockchain
                                technology can work together to benefit both
                                investors and local communities across
                                ASEAN.&quot;
                            </p>
                            <div className="font-brand text-[9px] text-panel-dark-muted/60 uppercase tracking-wider">
                                — Ample Rich Investors Corp., Project Overview
                                2024
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
