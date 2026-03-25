"use client";

import { motion } from 'framer-motion';

const impactCardsData = [
    {
        icon: "🏥",
        title: "Hospital Support",
        sub: "Life-Saving Power",
        desc: "Direct energy subsidies for local hospitals, ensuring 24/7 life-saving operations.",
        color: "group-hover:text-rose-400"
    },
    {
        icon: "🏘️",
        title: "Community Power",
        sub: "Regional Growth",
        desc: "Decentralized power plants providing affordable electricity to rural ASEAN villages.",
        color: "group-hover:text-amber-400"
    },
    {
        icon: "⚡",
        title: "Clean Mobility",
        sub: "EV Infrastructure",
        desc: "Expanding the clean mobility network with solar-powered charging stations.",
        color: "group-hover:text-blue-400"
    },
    {
        icon: "🌱",
        title: "Carbon Offset",
        desc: "Significant CO2 reduction through large-scale renewable energy displacement.",
        sub: "Net Zero Vision",
        color: "group-hover:text-emerald-400"
    }
];

export default function CommunityImpact() {
    return (
        <section className="bg-background pt-20 pb-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[500px] bg-amber-deep/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 40 }}
                            className="h-[1px] bg-amber-deep"
                        />
                        <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                            Community Impact
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-brand italic text-text-main tracking-tighter leading-[1.3] mb-10">
                        Powering <br />
                        <span className="font-serif normal-case text-amber-deep">Prosperity.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {impactCardsData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative bg-bg-sub border border-border rounded-[3.5rem] p-6 lg:p-8 flex flex-col items-start transition-all duration-500 hover:-translate-y-4 hover:border-amber-border shadow-2xl overflow-hidden"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-b from-amber-tint to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="w-20 h-20 rounded-[2rem] bg-forground/50 border border-border flex items-center justify-center text-4xl shadow-inner mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {item.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className={`text-3xl font-brand italic text-text-main leading-tight mb-2 transition-colors duration-500 ${item.color}`}>
                                    {item.title}
                                </h3>
                                <p className="font-brand text-[9px] uppercase tracking-[0.3em] text-amber-deep font-black mb-6">
                                    {item.sub}
                                </p>
                                <p className="text-text-sub text-[15px] leading-relaxed italic group-hover:text-text-main transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>

                            <span className="absolute bottom-8 right-10 font-brand italic text-9xl text-text-main/[0.02] pointer-events-none group-hover:text-text-main/[0.05] transition-all duration-500">
                                0{i + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}