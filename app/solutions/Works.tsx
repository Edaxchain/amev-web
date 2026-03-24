"use client";

import { motion } from "framer-motion";
import {
    CirclePoundSterling,
    Zap,
    Search,
    ClipboardList,
    TriangleRight,
} from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Free site assessment",
        desc: "Our engineers visit your site — rooftop, land, or water — and calculate exact output potential at no cost.",
        icon: <Search className="w-5 h-5 text-amber" />,
    },
    {
        id: "02",
        title: "Engineering & design",
        desc: "Full structural engineering, electrical design, and system layout. Optimised for your site's specific conditions.",
        icon: <TriangleRight className="w-5 h-5 text-amber" />,
    },
    {
        id: "03",
        title: "Permitting & compliance",
        desc: "We handle all government permits, grid connection applications, and regulatory compliance on your behalf.",
        icon: <ClipboardList className="w-5 h-5 text-amber" />,
    },
    {
        id: "04",
        title: "Installation & grid connection",
        desc: "Certified installation team. IoT smart meter fitted. Grid connection completed. System commissioned and tested.",
        icon: <Zap className="w-5 h-5 text-amber" />,
    },
    {
        id: "05",
        title: "Tokens minted — live",
        desc: "From the first kWh generated, SOLR tokens mint automatically to your wallet. No manual steps, ever.",
        icon: <CirclePoundSterling className="w-5 h-5 text-amber" />,
    },
];

export default function HowItWorks() {
    return (
        <section id="works" className="bg-bg-alt py-10 md:py-12">
            <div className="mx-auto px-6 md:px-[52px]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Installation process
                            </span>
                        </div>
                        <h2 className="font-brand text-4xl font-black leading-none">
                            From site visit to{" "}
                            <span className="italic font-editorial font-light text-amber-deep">
                                live in weeks.
                            </span>
                        </h2>
                    </div>
                    <p className="font-brand text-[13px] text-text-sub max-w-[280px] text-left md:text-right md:pt-12 leading-relaxed">
                        The same five-step process applies to all three
                        installation types. We manage everything.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`
                                relative flex flex-col p-8 pt-0 lg:pt-0
                                ${index !== steps.length - 1 ? "lg:border-r lg:border-divider" : ""}
                                border-b border-divider lg:border-b-0
                                ${index >= steps.length - 2 ? "md:max-lg:border-b-0" : ""}
                                last:border-b-0 max-lg:py-12
                            `}
                        >
                            <div
                                className="w-12 h-12 bg-background border border-amber-border rounded-2xl flex items-center justify-center mb-4 shadow-sm
                            transition-all duration-300 ease-out hover:scale-120 hover:border-amber/40 hover:shadow-lg"
                            >
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
