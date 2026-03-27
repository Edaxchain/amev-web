"use client";

import { motion } from "framer-motion";
import { itemVars, containerVars } from "@/app/_lib/animations";
import CountUpNumber from "@/app/_lib/count";

const stats = [
    { label: "Total Capacity", value: "368 MW" },
    { label: "Acres · Phase 1", value: "1,557" },
    { label: "Coverage · Thailand", value: "5 provinces" },
    { label: "Implementation Plan", value: "2021-2029" },
];

export default function ProjectStats() {
    return (
        <section
            id="stats"
            className="relative bg-amber pt-6 pb-6 md:pt-4 md:pb-4 border-t border-amber-border/5 z-20"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">
                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVars}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVars}
                            className={`
                                flex flex-col items-center justify-center text-center group
                                ${index !== stats.length - 1 ? "lg:border-r lg:border-border lg:pr-10" : ""}
                            `}
                        >
                            <h2 className="font-brand text-3xl md:text-4xl font-black tracking-tighter mb-3">
                                <CountUpNumber
                                    value={stat.value}
                                    duration={2}
                                />
                            </h2>

                            <p className="font-brand text-[10px] md:text-[11px] font-bold text-text-sub uppercase tracking-[0.15em] transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
