"use client";

import { motion, Variants } from "framer-motion";

const impacts = [
    {
        title: "Hospital support",
        desc: "Clean, reliable energy supply planned for hospital projects in the region. Supporting critical healthcare infrastructure with renewable power.",
        status: "Phase 2",
        icon: "🏥",
    },
    {
        title: "Community power plant",
        desc: "Local communities own a share of the energy generated — creating a new income stream for residents and the underlying local economy.",
        status: "Active",
        icon: "⚡",
    },
    {
        title: "EV charging network",
        desc: "EV Station infrastructure planned across all 5 provinces — powered entirely by renewable energy from the Solarc grid.",
        status: "5 provinces",
        icon: "🚗",
    },
    {
        title: "ASEAN energy hub",
        desc: "Long-term goal of becoming the electricity distribution centre of ASEAN — transmitting renewable energy across Southeast Asia.",
        status: "2027–2029",
        icon: "🌏",
    }
];

export default function CommunityImpact() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="community_impact" className="relative bg-panel-dark py-10 md:py-12 overflow-hidden border-t border-border/5">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-deep/15 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Community Impact
                            </span>
                        </div>
                        <h2 className="font-brand text-4xl text-panel-dark-text leading-none tracking-tight">
                            Energy that gives back<br />
                            <span className="italic font-editorial font-light text-amber-deep">to the community.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-brand text-[13px] text-panel-dark-muted max-w-[280px] text-left md:text-right md:pt-12 leading-relaxed"
                    >
                        The ISC Project is designed to generate sustainable income for local communities — not just electricity for the grid.
                    </motion.p>
                </div>

                {/* Impact Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {impacts.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={itemVars}
                            className="group bg-amber-dim/20 border border-panel-dark-border p-6 rounded-xl flex flex-col h-58 hover:bg-amber-dim/40 hover:border-amber/50 transition-all duration-300 shadow-2xl"
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-12 bg-amber-dim/20 border border-panel-dark-border rounded-xl flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 group-hover:border-amber/50 transition-all duration-300">
                                <span className="text-xl md:grayscale-[0.5] group-hover:grayscale-0 transition-all">
                                    {item.icon}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="font-brand text-md font-black text-panel-dark-text mb-1 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="font-brand text-[12px] leading-relaxed text-panel-dark-muted mb-1 flex-1">
                                {item.desc}
                            </p>
                            <div className="flex flex-col">
                                <span className="font-brand text-xl font-[900] text-amber tracking-tighter">
                                    {item.status}
                                </span>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}