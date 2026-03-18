"use client";

import { motion, Variants } from "framer-motion";

export default function Ratings() {
    const certificates = [
        { id: 1, title: "IEO Benchmark", sub: "8.7", icon: "🏅" },
        { id: 2, title: "IEO Bazaar", sub: "A", icon: "⚡" },
        { id: 3, title: "IEO Ranker", sub: "9.4", icon: "🛡️" },
        { id: 4, title: "Track AME", sub: "4.2/5", icon: "🌿" },
        { id: 5, title: "Wiser AME", sub: "7", icon: "🔗" },
        { id: 6, title: "Fund AME", sub: "2.2/10", icon: "📋" },
    ];

    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative bg-background pt-2 rounded-t-[40px] z-10 border-t border-border">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">

                {/* Section Header */}
                <div className="text-center mb-2">
                    <p className="font-brand text-[12px] font-bold text-text-main uppercase tracking-[0.2em] mb-2">
                        Rating
                    </p>

                </div>

                {/* Ratings Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars}
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVars}
                            className={`
                                group flex-1 min-w-[140px] lg:min-w-0 flex flex-col items-center text-center px-4 py-2
                                ${index !== certificates.length - 1 ? 'border-r border-border' : ''}
                                max-md:border-r-0 max-md:border-b max-md:pb-2 max-md:mb-2
                            `}
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300 group-hover:border-amber/40 group-hover:shadow-md group-hover:-translate-y-1">
                                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{cert.icon}</span>
                            </div>

                            {/* Text Info */}
                            <h4 className="font-brand text-[13px] font-black text-text-main mb-1 leading-tight">
                                {cert.title}
                            </h4>
                            <p className="font-brand text-[13px] font-medium text-text-main whitespace-nowrap">
                                {cert.sub}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}