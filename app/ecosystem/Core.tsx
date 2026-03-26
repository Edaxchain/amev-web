"use client";

import { motion } from 'framer-motion';

const coreData = [
    {
        id: "solar",
        title: "Solar Assets",
        label: "Primary Source",
        icon: "☀️",
        pos: "lg:translate-y-0"
    },
    {
        id: "iot",
        title: "IoT Data Link",
        label: "Real-time Connectivity",
        icon: "📟",
        pos: "lg:translate-y-20"
    },
    {
        id: "blockchain",
        title: "Smart Ledger",
        label: "On-chain Settlement",
        icon: "📜",
        pos: "lg:translate-y-0"
    },
    {
        id: "community",
        title: "Social Impact",
        label: "Wealth Distribution",
        icon: "🏘️",
        pos: "lg:translate-y-20"
    }
];

export default function CoreEco() {
    return (
        <section className="relative py-20 lg:pb-50 bg-panel-dark overflow-hidden">
            <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>
            <div className="px-6 lg:px-20 mb-6 relative z-10">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-amber-deep"
                    />
                    <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                        Our Ecosystem
                    </span>
                </div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <svg className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 hidden lg:block pointer-events-none opacity-30">
                    <motion.path
                        d="M 100 150 Q 300 50 550 150 T 1100 150"
                        stroke="url(#nexus-gradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="20, 15"
                        animate={{ strokeDashoffset: [200, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                        <linearGradient id="nexus-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--amber)" stopOpacity="0" />
                            <stop offset="50%" stopColor="var(--amber)" stopOpacity="1" />
                            <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-0 relative">
                    {coreData.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2, duration: 0.8, ease: "circOut" }}
                            className={`relative group w-full lg:w-1/4 flex flex-col items-center ${item.pos}`}
                        >
                            <div className="relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-8">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-amber-border/40 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 border border-amber-border rounded-full border-dashed"
                                />

                                <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 bg-zinc-900/80 border border-white/10 rounded-[2.5rem] backdrop-blur-xl flex items-center justify-center text-4xl shadow-2xl group-hover:border-amber-deep transition-all duration-500">
                                    <span className="group-hover:scale-110 transition-transform duration-500 filter group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                                        {item.icon}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/10 blur-[50px] rounded-full transition-all duration-500" />
                            </div>

                            <div className="text-center group">
                                <span className="inline-block font-mono text-[9px] uppercase tracking-[0.4em] text-amber-deep font-black mb-3 opacity-60 group-hover:opacity-100 transition-all">
                                    {item.label}
                                </span>
                                <h3 className="font-brand italic text-3xl text-panel-dark-text group-hover:text-amber-deep transition-all duration-500 leading-tight">
                                    {item.title}
                                </h3>

                                <motion.div
                                    className="h-[1px] bg-amber-deep mt-4 mx-auto"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 40 }}
                                    transition={{ delay: i * 0.3 }}
                                />
                            </div>

                            {i !== coreData.length - 1 && (
                                <div className="lg:hidden h-16 w-[1px] bg-gradient-to-b from-amber-deep to-transparent my-6" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
}